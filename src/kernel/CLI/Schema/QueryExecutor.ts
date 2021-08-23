import QueryBuilder from './QueryBuilder'
import Blueprint from './Blueprint'

export default class QueryExecutor
{
    static create(blueprint: Blueprint): Promise<any>
    {
        const query = QueryBuilder.create(blueprint)

        return new Promise((resolve, reject) =>
        {
            resolve(true)
            reject(false)
        })
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
}
