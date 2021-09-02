import * as fs from 'fs'
const path = require('path')
const handlebars = require('handlebars')
import { pascalCase } from 'change-case'
import chalk from 'chalk'

exports.command = 'migration <name> [table]'
exports.demandOption = [ 'table' ]
exports.desc = 'Make migration for you want'
exports.builder = {}
exports.handler = (argv) =>
{
    let action = 'create'

    argv.name = argv.name.toLowerCase()

    if (!/^create_.*_table$/gi.test(argv.name))
    {
        action = 'modify'

        if (argv.table) argv.table = argv.table.toLowerCase()
        else argv.table = argv.name.replace(/_table$/, '')
    }
    else
    {
        if (argv.table) argv.table = argv.table.toLowerCase()
        else argv.table = argv.name.replace(/^create_/, '').replace(/_table$/, '')
    }

    const template = handlebars.compile(fs.readFileSync(path.resolve(__dirname, `../../templates/migration_${ action }.template.handlebars`), 'utf8'))

    const migrationFileText = template({
        class_name: pascalCase(argv.name.replace(/_/g, ' ')),
        table_name: argv.table,
    })

    const date = new Date()

    const now = `${ date.getUTCFullYear() }${ (date.getUTCMonth() + 1).toString().padStart(2, '0') }${ date.getUTCDate().toString().padStart(2, '0') }${ date.getUTCHours().toString().padStart(2, '0') }${ date.getUTCMinutes().toString().padStart(2, '0') }${ date.getUTCSeconds().toString().padStart(2, '0') }`

    fs.writeFile(`./src/database/migrations/${ now }_${ argv.name }.ts`, migrationFileText, function (err)
    {
        if (err) throw err

        const ctx = new chalk.Instance({ level: 3 })

        console.log(ctx`{bgGreenBright.whiteBright Migration is created successfully.}`)
    })
}
