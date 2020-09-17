import ServiceProvider from '../../Foundation/ServiceProvider'

export default class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected policies = []

    /**
     * Register the application's policies.
     *
     * @return void
     */
    public registerPolicies()
    {
        //
    }
}
