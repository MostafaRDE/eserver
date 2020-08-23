import ServiceProvider from '../../ServiceProvider'

export default class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected namespace = 'app/Http/Controllers'

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public boot()
    {
        // Loading Router
        this.loadRouter()

        // Loading Routes
        this.loadRoutes()
    }

    /**
     * Load the application router.
     *
     * @return void
     */
    protected loadRouter()
    {
        // Router Instance
        const Router = require('../../Routing/Router').default

        // Store Router as globally with create new instance with every calls
        Object.defineProperty(global, 'router', {
            get: () => new Router('app/Http/Controllers'),
        })
    }

    /**
     * Load the application routes.
     *
     * @return void
     */
    protected loadRoutes()
    {
        require('../../../../routes')
        global.router.builder()
    }
}
