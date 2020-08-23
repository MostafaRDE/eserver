import ServiceProvider from '../../kernel/Foundation/Providers/RouteServiceProvider'

export class RouteServiceProvider extends ServiceProvider
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
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public boot()
    {
        //

        super.boot()
    }
}
