import Blueprint from '../Blueprint'

export function create (blueprint: Blueprint)
{
    let columns = '', indexes = '', uniqueIndexes = '', primaryKey = ''

    /**
     * Create columns query generator
     */
    blueprint.columns.forEach((item, index) =>
    {
        // Auto increment set as type "SERIAL or BIGSERIAL" in postgresql
        let type = item.options.type
        if (item.options.autoIncrement)
        {
            switch (item.options.type)
            {
                case 'BIGINT':
                    type = 'BIGSERIAL'
                    break

                case 'INT':
                    type = 'SERIAL'
                    break
            }
        }

        columns += `${ item.options.name } ${ type }`

        if (item.options.default) columns += ` default ${ item.options.default }`

        if (!item.options.nullable) columns += ' not null'

        if (item.options.raw) columns += ` ${ item.options.default }`

        if (index + 1 < blueprint.columns.length) columns += ', '
    })

    /**
     * Create indexes query generator
     */
    blueprint.indexes.forEach(item =>
    {
        const columnNames = item.columns.map((columnName, index) =>
        {
            let name = columnName
            if (index + 1 < item.columns.length) name += ', '
            return name
        })

        indexes += ` CREATE INDEX ${ item.name } ON ${ blueprint.table } (${ columnNames });`
    })

    /**
     * Create uniques query generator
     */
    blueprint.uniques.forEach(item =>
    {
        const columnNames = item.columns.map((columnName, index) =>
        {
            let name = columnName
            if (index + 1 < item.columns.length) name += ', '
            return name
        })

        uniqueIndexes += ` CREATE UNIQUE INDEX ${ item.name } ON ${ blueprint.table } (${ columnNames });`
    })

    /**
     * Create primary-key query generator
     */
    if (blueprint.primaryKey)
    {
        primaryKey = `ALTER TABLE ${ blueprint.table } ADD CONSTRAINT ${ blueprint.primaryKey.name } PRIMARY KEY (${ blueprint.primaryKey.columns.map((columnName, index) =>
        {
            let name = columnName
            if (index + 1 < blueprint.primaryKey.columns.length) name += ', '
            return name
        }) });`
    }

    /**
     * Return final query and mixing other queries
     */
    return `CREATE TABLE IF NOT EXISTS ${ blueprint.table } (${ columns }); ${ indexes }${ uniqueIndexes }${ primaryKey }`
}

export function existsTable(tableName: string, schema?: string)
{
    return `SELECT EXISTS (
        SELECT * FROM information_schema.tables
        WHERE  table_schema = '${ schema || 'public' }'
        AND    table_name   = '${ tableName }'
    )`
}