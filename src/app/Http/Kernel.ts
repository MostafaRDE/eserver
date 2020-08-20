import * as HttpKernelImporter from '../../kernel/Foundation/Http/Kernel'

export namespace App.Http
{
    import HttpKernel = HttpKernelImporter.Kernel.Foundation.Http.Kernel

    export class Kernel extends HttpKernel
    {
        /**
         * The application's global HTTP middleware stack.
         *
         * These middleware are run during every request to your application.
         *
         * @var array
         */
        protected middleware = [];

        /**
         * The application's route middleware.
         *
         * These middleware may be assigned to groups or used individually.
         *
         * @var array
         */
        protected routeMiddleware = {}
    }
}
