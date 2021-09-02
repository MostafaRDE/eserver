import Drivers from 'eloquent-orm-node/dist/lib/modules/enums/Drivers'

const connectionString: { driver: string } = global[ 'config' ]?.database[ process.env.DATABASE_CONNECTION ][ process.env.NODE_ENV || 'default' ] || { driver: 'postgres' }

export default {

    bigIncrements(): string
    {
        switch (Drivers[ connectionString.driver ])
        {
            case Drivers.postgres:
                return 'BIGSERIAL'
        }
    },

    bigInteger(): string
    {
        switch (Drivers[ connectionString.driver ])
        {
            case Drivers.postgres:
                return 'BIGINT'
        }
    },

    boolean(): string
    {
        switch (Drivers[ connectionString.driver ])
        {
            case Drivers.postgres:
                return 'BOOLEAN'
        }
    },

    increments(): string
    {
        switch (Drivers[ connectionString.driver ])
        {
            case Drivers.postgres:
                return 'SERIAL'
        }
    },

    integer(): string
    {
        switch (Drivers[ connectionString.driver ])
        {
            case Drivers.postgres:
                return 'INT'
        }
    },

    json(): string
    {
        switch (Drivers[ connectionString.driver ])
        {
            case Drivers.postgres:
                return 'JSON'
        }
    },

    jsonb(): string
    {
        switch (Drivers[ connectionString.driver ])
        {
            case Drivers.postgres:
                return 'JSONB'
        }
    },

    string(length?: number): string
    {
        switch (Drivers[ connectionString.driver ])
        {
            case Drivers.postgres:
                return `VARCHAR(${ length || 100 })`
        }
    },

    text(): string
    {
        switch (Drivers[ connectionString.driver ])
        {
            case Drivers.postgres:
                return 'TEXT'
        }
    },

    timestamp(): string
    {
        switch (Drivers[ connectionString.driver ])
        {
            case Drivers.postgres:
                return 'TIMESTAMP'
        }
    },

    timestamptz(): string
    {
        switch (Drivers[ connectionString.driver ])
        {
            case Drivers.postgres:
                return 'TIMESTAMPTZ'
        }
    },

}