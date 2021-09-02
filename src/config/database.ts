module.exports = {
    connection1: {
        default: {
            driver: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'postgres',
        },
        development: {
            driver: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            username: 'postgres',
            password: '123',
            database: 'postgres',
        },
        test: {
            driver: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: '',
        },
        production: {
            driver: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            username: 'postgres',
            password: '123',
            database: 'postgres',
        },
    },
}
