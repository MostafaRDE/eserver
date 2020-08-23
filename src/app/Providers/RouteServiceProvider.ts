import ServiceProvider from '../../kernel/Foundation/Support/Providers/RouteServiceProvider'

export class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected namespace = 'App.Http.Controllers'

    /**
     * The path to the "home" route for your application.
     *
     * @var string
     */
    public HOME = '/home'

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public boot()
    {
        super.boot()
    }
}
