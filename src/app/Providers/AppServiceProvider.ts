import * as ServiceProviderImporter from '../../kernel/Support/ServiceProvider'

export namespace App.Providers
{
    import ServiceProvider = ServiceProviderImporter.Kernel.Support.ServiceProvider

    export class AppServiceProvider extends ServiceProvider
    {
        /**
         * Register any application services.
         *
         * @return void
         */
        public register()
        {
            //
        }

        /**
         * Bootstrap any application services.
         *
         * @return void
         */
        public boot()
        {
            //
        }
    }
}
