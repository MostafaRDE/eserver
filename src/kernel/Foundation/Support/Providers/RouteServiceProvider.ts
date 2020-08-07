import * as ServiceProviderImporter from '../../../Support/ServiceProvider'

export namespace Kernel.Foundation.Support.Providers
{
    import ServiceProvider = ServiceProviderImporter.Kernel.Support.ServiceProvider

    export class RouteServiceProvider extends ServiceProvider
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