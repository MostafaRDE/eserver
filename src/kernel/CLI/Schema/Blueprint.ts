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

    bigIncrements(name?: string)
    {
        const _name = name || 'id'

        const columnIndex = this.columns.findIndex(column => column.options.name === name)

        if (columnIndex > -1) this.columns.splice(columnIndex, 1)

        const column = new ColumnEditor(this, {
            name: _name,
            type: types.bigIncrements(),
            autoIncrement: true,
        }).primaryKey().autoIncrement()

        this.columns.push(column)

        return column
    }

    // </editor-fold>

}