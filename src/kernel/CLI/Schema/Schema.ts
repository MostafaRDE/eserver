import Blueprint from './Blueprint'
import QueryExecutor from './QueryExecutor'

interface BlueprintFunctionImporter
{
    (table: Blueprint): any
}

export default class Schema
{
    static async create(table: string, blueprint: BlueprintFunctionImporter)
    {
        const _blueprint = new Blueprint()

        _blueprint.table = table

        blueprint(_blueprint)

        try
        {
            await QueryExecutor.create(_blueprint)
        }
        catch (e)
        {}
    }

    static table(table: string, blueprint: BlueprintFunctionImporter)
    {
        const _blueprint = new Blueprint()

        _blueprint.table = table

        blueprint(_blueprint)

        QueryExecutor.table(_blueprint)
            .then(result =>
            {
                //
            })
            .catch(error =>
            {
                throw error
            })
    }

    static drop(table: string)
    {
        const _blueprint = new Blueprint()

        _blueprint.table = table

        QueryExecutor.drop(_blueprint)
            .then(result =>
            {
                //
            })
            .catch(error =>
            {
                throw error
            })
    }
}