import Blueprint from './Blueprint'

export default class QueryBuilder
{
    static create(blueprint: Blueprint): string
    {
        const query = 'CREATE TABLE IF NOT EXISTS '
        return query
    }

    static table(blueprint: Blueprint): string
    {
        const query = 'CREATE TABLE IF NOT EXISTS '
        return query
    }

    static drop(blueprint: Blueprint): string
    {
        const query = 'CREATE TABLE IF NOT EXISTS '
        return query
    }
}