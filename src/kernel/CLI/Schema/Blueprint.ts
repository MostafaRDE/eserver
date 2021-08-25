import types from './Types'
import ColumnEditor from './ColumnEditor'

interface IColumnTypes
{
    bigIncrements()
}

interface IIndex
{
    name: string,
    columns: Array<string>,
}

export default class Blueprint implements IColumnTypes
{
    table: string
    columns: Array<ColumnEditor> = []
    primaryKey: IIndex
    indexes: Array<IIndex> = []
    uniques: Array<IIndex> = []

    // ------------------------------------------------------------------------

    // <editor-fold desc="Actions">

    bigIncrements(name?: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name || 'id')

        const column = new ColumnEditor(this, {
            name: name || 'id',
            type: types.bigIncrements(),
        }).primaryKey().autoIncrement()

        this.columns.push(column)

        return column
    }

    bigInteger(name?: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.bigInteger(),
        })

        this.columns.push(column)

        return column
    }

    boolean(name?: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.boolean(),
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
        }).primaryKey().autoIncrement()

        this.columns.push(column)

        return column
    }

    integer(name?: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.integer(),
        })

        this.columns.push(column)

        return column
    }

    json(name?: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.json(),
        })

        this.columns.push(column)

        return column
    }

    jsonb(name?: string): ColumnEditor
    {
        this.removeColumnFromListIfExists(name)

        const column = new ColumnEditor(this, {
            name,
            type: types.jsonb(),
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

    // </editor-fold>

    // ------------------------------------------------------------------------

    // <editor-fold desc="Actions">

    removeColumnFromListIfExists(name?: string)
    {
        const columnIndex = this.columns.findIndex(column => column.options.name === name)

        if (columnIndex > -1) this.columns.splice(columnIndex, 1)
    }

    // </editor-fold>

}