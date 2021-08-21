import Migration from '../../kernel/CLI/Migration/Migration'
import Schema from '../../kernel/CLI/Schema/Schema'

module.exports = class CreateUsersTable extends Migration
{
    up()
    {
        Schema.create('users', (table) =>
        {
            table.bigIncrements()
        })
    }

    down()
    {
        Schema.drop('users')
    }
}