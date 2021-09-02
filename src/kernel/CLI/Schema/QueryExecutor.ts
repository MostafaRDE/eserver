import chalk from 'chalk'

import 'eloquent-orm-node/dist/lib'
import DB from 'eloquent-orm-node/dist/lib/db/DB'

import QueryBuilder from './QueryBuilder'
import Blueprint from './Blueprint'
import ColumnEditor from './ColumnEditor'
import Types from './Types'

const options = require('../../../config/database')

export default class QueryExecutor
{
    static migrationName = ''

    static async create(blueprint: Blueprint): Promise<any>
    {
        const db = new DB(options[ process.env.DATABASE_CONNECTION ][ process.env.NODE_ENV || 'default' ])

        if (await QueryExecutor.checkExistsMigrationsTable())
        {
            const result = await db.table('_migrations').where({ key: 'name', value: QueryExecutor.migrationName }).first()

            if (result) return true
        }
        else await QueryExecutor.createMigrationTable()


        const ctx = new chalk.Instance({ level: 3 })

        console.log(ctx`{whiteBright.bgYellowBright  Waiting } {bold Migrating ${ QueryExecutor.migrationName } ...}`)

        try
        {
            await db.raw(QueryBuilder.create(blueprint))

            const result = await db.table('_migrations').insert({ name: QueryExecutor.migrationName })

            console.log(ctx`{whiteBright.bgGreenBright  DONE } {bold ${ QueryExecutor.migrationName } migrated.}`)

            return result
        }
        catch (e)
        {
            console.log(ctx`{whiteBright.bgRedBright  ERROR } {bold ${ QueryExecutor.migrationName } =>} ${ e.message }.`)
            return e
        }
    }

    static table(blueprint: Blueprint): Promise<any>
    {
        const query = QueryBuilder.table(blueprint)

        return new Promise((resolve, reject) =>
        {
            resolve(true)
            reject(false)
        })
    }

    static drop(blueprint: Blueprint): Promise<any>
    {
        const query = QueryBuilder.drop(blueprint)

        return new Promise((resolve, reject) =>
        {
            resolve(true)
            reject(false)
        })
    }

    ///////////////////////////////////////////////////////////////////////////////

    static async checkExistsMigrationsTable(): Promise<boolean>
    {
        const db = new DB(options[ process.env.DATABASE_CONNECTION ][ process.env.NODE_ENV || 'default' ])

        return (await db.raw(QueryBuilder.existsTable('_migrations'))).rows[ 0 ].exists
    }

    static async createMigrationTable()
    {
        const blueprint = new Blueprint()

        blueprint.table = '_migrations'
        blueprint.columns.push(
            new ColumnEditor(blueprint, { name: 'id', type: Types.bigIncrements() }).primaryKey().autoIncrement(),
            new ColumnEditor(blueprint, { name: 'name', type: Types.string(256) }).notNull(),
            new ColumnEditor(blueprint, { name: 'created_at', type: Types.timestamptz() }).default('now()'),
        )

        const db = new DB(options[ process.env.DATABASE_CONNECTION ][ process.env.NODE_ENV || 'default' ])

        await db.raw(QueryBuilder.create(blueprint))
    }
}
