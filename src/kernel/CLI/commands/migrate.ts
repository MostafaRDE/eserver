import QueryExecutor from '../Schema/QueryExecutor'

const path = require('path')

exports.command = 'migrate [action]'
exports.desc = 'Migrating to new updates for database'
exports.builder = {}
exports.handler = async (argv) =>
{
    const { readdirSync } = require('fs'), config = {}
    const files = readdirSync('./src/database/migrations')
    for (const file of files)
    {
        if (/\.ts$/.test(file))
        {
            const filename = file.replace(/\.ts$/, '')
            config[ filename ] = new (require(path.resolve(`./src/database/migrations/${ file }`)))()

            QueryExecutor.migrationName = filename

            switch (argv.action?.toLowerCase())
            {
                case 'rollback':
                    await config[ filename ].down()
                    break

                default:
                    await config[ filename ].up()
            }
        }
    }
}