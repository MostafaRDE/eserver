import Router from './Routing/Router'
import Middleware from './Middleware'

export default class Kernel
{
    protected a = 1
    /**
     * The router instance.
     *
     * @var Kernel\Foundation\Routing\Router
     */
    protected router

    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected middleware: Middleware[] = [];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected routeMiddleware: Record<string, Middleware> = {}

    /**
     * The priority-sorted list of middleware.
     *
     * Forces non-global middleware to always be in the given order.
     *
     * @var array
     */
    protected middlewarePriority: Middleware[] = [
        // StartSession
        // ShareErrorsFromSession
        // AuthenticatesRequests
        // ThrottleRequests
        // AuthenticateSession
        // SubstituteBindings
        // Authorize
    ]
    /**
     * Sync the current state of the middleware to the router.
     *
     * @return void
     */
    public syncMiddlewareToRouter()
    {
        Router.middlewarePriority = this.middlewarePriority

        this.middleware.forEach(middleware => Router.middlewarePriority.push(middleware))

        Object.entries(this.routeMiddleware).forEach(([ key, value ]) => Router.aliasMiddleware(key, value))
    }

    /**
     * Get the application's route middleware.
     *
     * @return array
     */
    public getRouteMiddleware()
    {
        return this.routeMiddleware
    }
}
