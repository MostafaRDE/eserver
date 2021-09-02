import Drivers from 'eloquent-orm-node/dist/lib/modules/enums/Drivers'
import Blueprint from './Blueprint'
import * as postgresQueryBuilder from './QueryBuilder/postgres'

export default class QueryBuilder
{
    static connectionString: { driver: string } = global[ 'config' ]?.database[ process.env.DATABASE_CONNECTION ][ process.env.NODE_ENV || 'default' ] || { driver: 'postgres' }

    static create(blueprint: Blueprint): string
    {
        switch (Drivers[ QueryBuilder.connectionString.driver ])
        {
            case Drivers.postgres:
                return postgresQueryBuilder.create(blueprint)
        }
    }

    static table(blueprint: Blueprint): string
    {
        return undefined
    }

    static drop(blueprint: Blueprint): string
    {
        return undefined
    }

    static existsTable(tableName): string
    {
        switch (Drivers[ QueryBuilder.connectionString.driver ])
        {
            case Drivers.postgres:
                return postgresQueryBuilder.existsTable(tableName)
        }
    }
}