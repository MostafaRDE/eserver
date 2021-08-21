const path = require('path')

exports.command = 'migrate [action]'
exports.desc = 'Migrating to new updates for database'
exports.builder = {}
exports.handler = (argv) =>
{
    const { readdirSync } = require('fs'), config = {}
    readdirSync('./src/database/migrations').forEach(file =>
    {
        if (/\.ts$/.test(file))
        {
            const filename = file.replace(/\.ts$/, '')
            config[ filename ] = new (require(path.resolve(`./src/database/migrations/${ file }`)))()

            switch (argv.action?.toLowerCase())
            {
                case 'rollback':
                    config[ filename ].down()
                    break

                default:
                    config[ filename ].up()
            }
        }
    })
}