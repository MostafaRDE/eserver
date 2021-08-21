import Drivers from 'eloquent-orm-node/dist/lib/modules/enums/Drivers'

const connectionString: { driver: string } = global[ 'config' ]?.database[ process.env.DATABASE_CONNECTION ][ process.env.NODE_ENV || 'default' ] || { driver: 'postgres' }

export default {
    bigIncrements(): string
    {
        switch (Drivers[ connectionString.driver ])
        {
            case Drivers.postgres:
                return 'BIGINT'
        }
    },
}