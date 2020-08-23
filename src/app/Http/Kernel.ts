import HttpKernel from '../../kernel/Foundation/Http/Kernel'

export default class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected middleware = [
        require('../Http/Middleware/CheckForMaintenanceMode').CheckForMaintenanceMode,
    ]

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected routeMiddleware = {
        'auth': require('../Http/Middleware/Authenticate').Authenticate,
    }
}
