import ServiceProvider from '../../Foundation/ServiceProvider'
import DB from 'eloquent-orm-node/lib/db/DB'

export class DatabaseServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public register()
    {
        // Store DB(eon) as globally with create new instance with every calls
        Object.defineProperty(global, 'DB', {
            get: () => new DB(global.config.database[ process.env.DATABASE_CONNECTION ][ process.env.NODE_ENV || 'default' ]),
        })
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public boot()
    {
        require('./Modules')
    }
}
