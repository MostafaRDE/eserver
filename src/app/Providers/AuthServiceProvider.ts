import * as ServiceProviderImporter from '../../kernel/Foundation/Support/Providers/AuthServiceProvider'

export namespace App.Providers
{
    import ServiceProvider = ServiceProviderImporter.Kernel.Foundation.Support.Providers.AuthServiceProvider

    export class AuthServiceProvider extends ServiceProvider
    {
        /**
         * Register any authentication / authorization services.
         *
         * @return void
         */
        public boot()
        {
            //
        }
    }
}
