import Blueprint from './Blueprint'

interface IOptions {
    name: string,
    type: string,
    default?: any,
    autoIncrement?: boolean,
    nullable?: boolean,
    description?: string,
}

interface IColumn
{
    autoIncrement(name?: string): this
    default(value: any): this
    description(text: string): this
    index(name?: string): this
    nullable(name?: string): this
    primaryKey(name?: string): this
    unique(name?: string): this
}

export default class ColumnEditor implements IColumn
{
    blueprint: Blueprint

    options: IOptions = {
        name: '',
        type: '',
        default: undefined,
        autoIncrement: false,
        nullable: false,
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

    index(name?: string): this
    {
        if (!name) name = `${ this.options.name }_index`

        this.blueprint.indexes.push({
            name,
            columns: [ this.options.name ],
        })

        return this
    }

    nullable(name?: string): this
    {
        this.options.nullable = true

        return this
    }

    primaryKey(name?: string): this
    {
        if (!name) name = `${ this.options.name }_primary_key`

        this.blueprint.primaryKey = { name, columns: [ this.options.name ] }

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