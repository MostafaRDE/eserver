import Blueprint from './Blueprint'


interface BlueprintFunctionImporter
{
    (table: Blueprint): any
}

export default class Schema
{
    static create(table: string, blueprint: BlueprintFunctionImporter)
    {
        const _blueprint = new Blueprint()

        blueprint(_blueprint)

        _blueprint.create()
            .then(result =>
            {
                //
            })
            .catch(error =>
            {
                throw error
            })
    }

    static table(table: string, blueprint: BlueprintFunctionImporter)
    {
        const _blueprint = new Blueprint()

        blueprint(_blueprint)

        _blueprint.table()
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

        _blueprint.drop()
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