import types from './Types'
import ColumnEditor from './ColumnEditor'

interface IColumnTypes
{
    bigIncrements(name?: string): ColumnEditor
    bigInteger(name: string, unsigned?: boolean): ColumnEditor
    boolean(name: string): ColumnEditor
    date(name: string): ColumnEditor
    decimal(name: string): ColumnEditor
    double(name: string): ColumnEditor
    increments(name?: string): ColumnEditor
    integer(name: string, unsigned?: boolean): ColumnEditor
    json(name: string): ColumnEditor
    jsonb(name: string): ColumnEditor
    numeric(name: string): ColumnEditor
    real(name: string): ColumnEditor
    smallInteger(name: string, unsigned?: boolean)
    softDeletes(withTimeZone?: boolean)
    string(name: string, length?: number): ColumnEditor
    text(name: string): ColumnEditor
    time(name: string): ColumnEditor
    timestamp(name: string, withTimeZone?: boolean): ColumnEditor
    timestamps(withTimeZone?: boolean)
    timestampstz()
    timestamptz(name: string): ColumnEditor
    unsignedBigInteger(name?: string): ColumnEditor
    unsignedInteger(name?: string): ColumnEditor
    unsignedSmallInteger(name?: string): ColumnEditor

}

interface IActions
{
    foreign(columnName: string): ForeignKeyFactory
}

interface IIndex
{
    name: string,
    columns: Array<string>,
}

interface IForeignKey
{
    name: string,
    references?: string,
    on?: string,
    onUpdate?: string,
    onDelete?: string,
}

class ForeignKeyFactory
{
    foreignKey: IForeignKey

    constructor(foreignKey: IForeignKey)
    {
        this.foreignKey = foreignKey
    }

    references(columnName: string)
    {
        this.foreignKey.references = columnName
        return this
    }

    on(tableName: string)
    {
        this.foreignKey.on = tableName
        return this
    }

    onUpdate(type: string)
    {
        this.foreignKey.onUpdate = type
        return this
    }

    onDelete(type: string)
    {
        this.foreignKey.onDelete = type
        return this
    }
}

export default class Blueprint implements IColumnTypes, IActions
{
    table: string
    columns: Array<ColumnEditor> = []
    primaryKey: IIndex
    indexes: Array<IIndex> = []
    uniques: Array<IIndex> = []
    foreignKeys: Array<IForeignKey> = []

    // ------------------------------------------------------------------------

    // <editor-fold desc="Actions">

    bigIncrements(name?: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name || 'id')

        const column = new ColumnEditor(this, {
            name: name || 'id',
            type: types.bigIncrements(),
            nullable: false,
            unsigned: true,
        }).primaryKey().autoIncrement()

        this.columns.push(column)

        return column
    }

    bigInteger(name: string, unsigned?: boolean): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.bigInteger(),
            unsigned: unsigned ? unsigned : false,
        })

        this.columns.push(column)

        return column
    }

    boolean(name: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.boolean(),
        })

        this.columns.push(column)

        return column
    }

    date(name: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.date(),
        })

        this.columns.push(column)

        return column
    }

    decimal(name: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.decimal(),
        })

        this.columns.push(column)

        return column
    }

    double(name: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.double(),
        })

        this.columns.push(column)

        return column
    }

    increments(name?: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name || 'id')

        const column = new ColumnEditor(this, {
            name: name || 'id',
            type: types.increments(),
            nullable: false,
            unsigned: true,
        }).primaryKey().autoIncrement()

        this.columns.push(column)

        return column
    }

    integer(name: string, unsigned?: boolean): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.integer(),
            unsigned: unsigned ? unsigned : false,
        })

        this.columns.push(column)

        return column
    }

    json(name: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.json(),
        })

        this.columns.push(column)

        return column
    }

    jsonb(name: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.jsonb(),
        })

        this.columns.push(column)

        return column
    }

    numeric(name: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.numeric(),
        })

        this.columns.push(column)

        return column
    }

    real(name: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.real(),
        })

        this.columns.push(column)

        return column
    }

    smallInteger(name: string, unsigned?: boolean): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.smallInteger(),
            unsigned: unsigned ? unsigned : false,
        })

        this.columns.push(column)

        return column
    }

    softDeletes(withTimeZone?: boolean)
    {
        this.removeColumnFromListIfExists('deleted_at')

        this.columns.push(
            new ColumnEditor(this, {
                name: 'deleted_at',
                type: withTimeZone ? types.timestamptz() : types.timestamp(),
            }).nullable(),
        )
    }

    string(name: string, length?: number): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.string(length),
        })

        this.columns.push(column)

        return column
    }

    text(name: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.text(),
        })

        this.columns.push(column)

        return column
    }

    time(name: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.time(),
        })

        this.columns.push(column)

        return column
    }

    timestamp(name: string, withTimeZone?: boolean): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: withTimeZone ? types.timestamptz() : types.timestamp(),
        })

        this.columns.push(column)

        return column
    }

    timestamps(withTimeZone?: boolean)
    {
        this.removeColumnFromListIfExists('created_at')
        this.removeColumnFromListIfExists('updated_at')

        this.columns.push(
            new ColumnEditor(this, {
                name: 'created_at',
                type: withTimeZone ? types.timestamptz() : types.timestamp(),
            }).default('NOW()'),
            new ColumnEditor(this, {
                name: 'updated_at',
                type: withTimeZone ? types.timestamptz() : types.timestamp(),
            }).default('NOW()'),
        )
    }

    timestampstz()
    {
        this.timestamps(true)
    }

    timestamptz(name: string): ColumnEditor
    {
        return this.timestamp(name, true)
    }

    unsignedBigInteger(name?: string): ColumnEditor
    {
        return this.bigInteger(name, true)
    }

    unsignedInteger(name?: string): ColumnEditor
    {
        return this.integer(name, true)
    }

    unsignedSmallInteger(name?: string): ColumnEditor
    {
        return this.smallInteger(name, true)
    }

    // </editor-fold>

    // ------------------------------------------------------------------------

    // <editor-fold desc="Actions">

    foreign(columnName: string): ForeignKeyFactory
    {
        this.foreignKeys.push({ name: columnName })

        const foreignKeyIndex = this.foreignKeys.findIndex(item => item.name === columnName)

        return new ForeignKeyFactory(this.foreignKeys[ foreignKeyIndex ])
    }

    // </editor-fold>

    // ------------------------------------------------------------------------

    // <editor-fold desc="Helpers">

    removeColumnFromListIfExists(name?: string)
    {
        const columnIndex = this.columns.findIndex(column => column.options.name === name)

        if (columnIndex > -1) this.columns.splice(columnIndex, 1)
    }

    // </editor-fold>

}