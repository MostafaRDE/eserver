import Blueprint from './Blueprint'

interface IOptions {
    name: string,
    type: string,
    default?: any,
    autoIncrement?: boolean,
    nullable?: boolean,
    unsigned?: boolean,
    raw?: string,
    description?: string,
}

interface IColumn
{
    autoIncrement(name?: string): this
    default(value: any): this
    description(text: string): this
    index(name?: string): this
    notNull(): this
    nullable(): this
    primaryKey(name?: string): this
    raw(raw?: string): this
    unique(name?: string): this
    unsigned(): this
}

export default class ColumnEditor implements IColumn
{
    blueprint: Blueprint

    options: IOptions = {
        name: '',
        type: '',
        default: undefined,
        autoIncrement: false,
        nullable: true,
        unsigned: false,
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
        if (!name) name = `${ this.blueprint.table }_${ this.options.name }_index`

        this.blueprint.indexes.push({
            name,
            columns: [ this.options.name ],
        })

        return this
    }

    notNull(): this
    {
        this.options.nullable = false

        return this
    }

    nullable(): this
    {
        this.options.nullable = true

        return this
    }

    primaryKey(name?: string): this
    {
        if (!name) name = `${ this.blueprint.table }_${ this.options.name }_pk`

        this.blueprint.primaryKey = { name, columns: [ this.options.name ] }

        return this
    }

    raw(raw?: string): this
    {
        this.options.raw = raw

        return this
    }

    unique(name?: string): this
    {
        if (!name) name = `${ this.blueprint.table }_${ this.options.name }_uindex`

        this.blueprint.uniques.push({
            name,
            columns: [ this.options.name ],
        })

        return this
    }

    unsigned(): this
    {
        this.options.unsigned = true

        return this
    }
}