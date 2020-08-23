import ServiceProvider from '../../kernel/Foundation/Providers/AuthServiceProvider'

export class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected policies = []

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public boot()
    {
        this.registerPolicies()
    }
}
