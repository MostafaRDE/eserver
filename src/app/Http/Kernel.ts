import HttpKernel from '../../kernel/Foundation/Http/Kernel'
import Middleware from '../../kernel/Foundation/Http/Middleware'

export default class Kernel extends HttpKernel
{
    protected a = 2
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected middleware: Middleware[] = [
        require('../Http/Middleware/CheckForMaintenanceMode').CheckForMaintenanceMode,
    ]

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected routeMiddleware: Record<string, Middleware> = {
        'auth': require('../Http/Middleware/Authenticate').Authenticate,
    }

}
