import Migration from '../../kernel/CLI/Migration/Migration'
import Schema from '../../kernel/CLI/Schema/Schema'

module.exports = class CreateUsersTable extends Migration
{
    async up()
    {
        await Schema.create('users', (table) =>
        {
            table.bigIncrements()
            table.string(name)
            table.string('email', 256)
            table.timestamps(true)
        })
    }

    async down()
    {
        await Schema.drop('users')
    }
}