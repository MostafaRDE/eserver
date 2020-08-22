export default class Kernel
{
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
    protected middleware = [];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected routeMiddleware = {}

    /**
     * The priority-sorted list of middleware.
     *
     * Forces non-global middleware to always be in the given order.
     *
     * @var array
     */
    protected middlewarePriority = [
        // StartSession
        // ShareErrorsFromSession
        // AuthenticatesRequests
        // ThrottleRequests
        // AuthenticateSession
        // SubstituteBindings
        // Authorize
    ]

    constructor()
    {
        this.syncMiddlewareToRouter()
    }

    /**
     * Sync the current state of the middleware to the router.
     *
     * @return void
     */
    protected syncMiddlewareToRouter()
    {
        global.router.middlewarePriority = this.middlewarePriority

        this.middleware.forEach(middleware => global.router.middlewarePriority.push(middleware))

        Object.entries(this.routeMiddleware).forEach(([ key, value ]) => global.router.aliasMiddleware(key, value))
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
