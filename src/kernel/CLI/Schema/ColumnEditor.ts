import Blueprint from './Blueprint'

interface IOptions {
    name: string,
    type: string,
    default?: any,
    description?: string,
    autoIncrement?: boolean,
}

interface IColumn
{
    default(value: any): this
    primaryKey(name?: string): this
    index(name?: string): this
    unique(name?: string): this
    autoIncrement(name?: string): this
    description(text: string): this
}

export default class ColumnEditor implements IColumn
{
    blueprint: Blueprint

    options: IOptions = {
        name: '',
        type: '',
        default: undefined,
        autoIncrement: false,
        description: '',
    }

    constructor(blueprint: Blueprint, options: IOptions)
    {
        this.blueprint = blueprint
        this.options = options
    }

    autoIncrement(): this
    {
        this.options.autoIncrement = true
        return this
    }

    default(value: any): this
    {
        this.options.default = value
        return this
    }

    description(text: string): this
    {
        this.options.description = text
        return this
    }

    primaryKey(name?: string): this
    {
        if (!name) name = `${ this.options.name }_primary_key`

        this.blueprint.primaryKey = { name, columns: [ this.options.name ] }

        return this
    }

    index(name?: string): this
    {
        if (!name) name = `${ this.options.name }_index`

        this.blueprint.indexes.push({
            name,
            columns: [ this.options.name ],
        })

        return this
    }

    unique(name?: string): this
    {
        if (!name) name = `${ this.options.name }_unique`

        this.blueprint.uniques.push({
            name,
            columns: [ this.options.name ],
        })

        return this
    }
}