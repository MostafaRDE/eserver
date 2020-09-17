export interface IModelProperties
{
    /**
     * Default keys of model
     */

    [ key: string ]: any
    data: Record<string, any>

    /**
     * Your keys or columns of the model
     */

    name: string
}

export default class User extends global.Model
{
    table = 'table_name'

    columns = {
        name: String,
    }

    fillable = [
        'name',
    ]

    guarded = [
        'password',
    ]

    required = [
        'name',
    ]

    hidden = [
        'password',
    ]
}

export const instance = global.DBInstanceCreator<IModelProperties>(User)
