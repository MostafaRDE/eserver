import { Router as ExpressRouter } from 'express'

import { RouterControllerType, IRouter } from './IRouter'

import IRoute from './IRoute'

export default class Router implements IRouter
{
    /**
     * The route collection instance.
     */
    public static routes: IRoute[] = []

    /**
     * The route collection instance.
     */
    protected baseNamespace = ''

    /**
     * The express router.
     */
    protected eRouter

    /**
     * The route options instance.
     */
    protected options = {
        namespace: '',
        prefix: '',
        middleware: [],
    }

    /**
     * All of the short-hand keys for middleware.
     */
    protected static middleware = []

    /**
     * The priority-sorted list of middleware.
     *
     * Forces the listed middleware to always be in the given order.
     */
    public static middlewarePriority = []

    /**
     * The routes middlewares for just routing.
     */
    public static middlewareRoutes = {}

    /**
     * Create a new Router instance.
     */
    constructor(baseNamespace = 'app/Http/Controllers')
    {
        // Store base namespace
        this.baseNamespace = baseNamespace

        // Create instance from express-router and save it locally for set routes
        this.eRouter = ExpressRouter()
    }

    /**
     * Register a short-hand name for a middleware.
     */
    public static aliasMiddleware(name, _class)
    {
        Router.middlewareRoutes[ name ] = _class
    }

    /**
     * Here we fill express-router
     */
    public builder()
    {
        Router.routes.forEach(route =>
        {
            global.app.app[ route.method ](route.path, ...[ ...route.middleware, route.controller ])
        })
    }


    /*
    |--------------------------------------------------------------------------
    | Routing Router
    |--------------------------------------------------------------------------
    |
    | For setup routing methods.
    | Orders by: Request methods, Collections and Options.
    |
    */

    private controllerGetter(controllerHandler: RouterControllerType)
    {
        let controller

        if (typeof controllerHandler === 'string')
        {
            const [ controllerClass, controllerMethod ] = controllerHandler.split('@')
            const _controllerPath = global.stringJoin({
                delimiter: '/',
                first: false,
                last: false,
            }, this.baseNamespace, this.options.namespace, controllerClass)

            const _controller = require(`../../../${ _controllerPath }`).default
            controller = new _controller()[ controllerMethod ]
        }
        else
        {
            controller = controllerHandler
        }

        return controller
    }

    private addRoute({ method, path, controller }: IRoute)
    {
        Router.routes.push({
            method,
            path: global.stringJoin({
                delimiter: '/',
                first: true,
                last: false,
            }, '/', this.options.prefix, path),
            middleware: [ ...Router.middlewarePriority, ...Router.middleware, ...this.options.middleware ],
            controller,
        })
    }


    /**
     * Methods
     */

    public all(path: string, controllerHandler: RouterControllerType)
    {
        this.addRoute({
            method: 'all',
            path,
            controller: this.controllerGetter(controllerHandler),
        })
    }

    public get(path: string, controllerHandler: RouterControllerType)
    {
        this.addRoute({
            method: 'get',
            path,
            controller: this.controllerGetter(controllerHandler),
        })
    }

    public patch(path: string, controllerHandler: RouterControllerType)
    {
        this.addRoute({
            method: 'patch',
            path,
            controller: this.controllerGetter(controllerHandler),
        })
    }

    public post(path: string, controllerHandler: RouterControllerType)
    {
        this.addRoute({
            method: 'post',
            path,
            controller: this.controllerGetter(controllerHandler),
        })
    }

    public put(path: string, controllerHandler: RouterControllerType)
    {
        this.addRoute({
            method: 'put',
            path,
            controller: this.controllerGetter(controllerHandler),
        })
    }

    public delete(path: string, controllerHandler: RouterControllerType)
    {
        this.addRoute({
            method: 'delete',
            path,
            controller: this.controllerGetter(controllerHandler),
        })
    }


    /**
     * Default
     */

    public resource(path: string, controllerHandler: string)
    {
        this.get(path, `${ controllerHandler }@index`)
        this.post(path, `${ controllerHandler }@store`)
        this.get(`${ path }/:id`, `${ controllerHandler }@show`)
        this.put(`${ path }/:id`, `${ controllerHandler }@update`)
        this.delete(`${ path }/:id`, `${ controllerHandler }@destroy`)
    }


    /**
     * Options
     */

    public namespace(namespace: string)
    {
        const _this = global.clone(this)

        _this.options.namespace = global.stringJoin({
            delimiter: '/',
            first: false,
            last: true,
        }, '/', this.options.namespace, namespace)

        return _this
    }

    public prefix(path: string)
    {
        const _this = global.clone(this)

        _this.options.prefix = global.stringJoin({
            delimiter: '/',
            first: true,
            last: true,
        }, '/', this.options.prefix, path)

        return _this
    }

    public group(callback: (router: Router) => void)
    {
        callback(global.clone(this))
    }

    public addMiddleware(name: string)
    {
        const _this = global.clone(this)

        _this.options.middleware.push(Router.middlewareRoutes[ name ])

        return _this
    }
}
