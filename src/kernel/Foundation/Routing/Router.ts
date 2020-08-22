const nodePath = require('path')

import * as ExpressRouterImporter from 'express'

export namespace Kernel.Foundation.Routing
{
    import ExpressRouter = ExpressRouterImporter.Router

    type RouterControllerType = string | ((...args) => void)

    interface IRouter
    {
        /**
         * Methods
         */
        get(path: string, controller: RouterControllerType)
        patch(path: string, controller: RouterControllerType)
        post(path: string, controller: RouterControllerType)
        put(path: string, controller: RouterControllerType)
        delete(path: string, controller: RouterControllerType)

        /**
         * Default
         */
        resource(path: string, controller: string)
        any(path: string, controller: RouterControllerType)

        /**
         * Options
         */
        prefix(path: string)
        namespace(namespace: string)
        group(cb: (router: Router) => void)
        addMiddleware(name: string)
    }

    export class Router implements IRouter
    {
        /**
         * The route collection instance.
         */
        protected static routes: {
            method: string,
            path: string,
            middleware: ((...args) => void)[],
            controller: ((req, res) => void),
        }[] = []

        /**
         * The express router.
         */
        protected eRouter

        /**
         * The route options instance.
         */
        protected options = {
            prefix: '',
            namespace: '',
            middleware: [],
            locked: [],
        }

        /**
         * All of the short-hand keys for middleware.
         */
        protected middleware = []

        /**
         * The priority-sorted list of middleware.
         *
         * Forces the listed middleware to always be in the given order.
         */
        public middlewarePriority = []

        /**
         * The routes middlewares for just routing.
         */
        public middlewareRoutes = {}

        /**
         * Create a new Router instance.
         */
        constructor()
        {
            this.eRouter = ExpressRouter()
            this.eRouter.get('')
        }

        // public clone(): any
        // {
        //     const cloneObj = new (this.constructor() as any)
        //     for (const attribute in this)
        //     {
        //         if (typeof this[ attribute ] === 'object')
        //         {
        //             cloneObj[ attribute ] = this[ attribute ].clone()
        //         }
        //         else
        //         {
        //             cloneObj[ attribute ] = this[ attribute ]
        //         }
        //     }
        //     return cloneObj
        // }

        /**
         * Register a short-hand name for a middleware.
         */
        public aliasMiddleware(name, _class)
        {
            this.middlewareRoutes[ name ] = _class
        }

        /**
         * Here we fill express-router
         */
        public builder()
        {
            Router.routes.forEach(route =>
            {
                global.app[ route.method ](route.path, ...[ ...route.middleware, route.controller ])
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


        /**
         * Methods
         */

        get(path: string, controller: RouterControllerType)
        {
            //
        }

        patch(path: string, controller: RouterControllerType)
        {
            //
        }

        post(path: string, controller: RouterControllerType)
        {
            //
        }

        put(path: string, controller: RouterControllerType)
        {
            //
        }

        delete(path: string, controller: RouterControllerType)
        {
            //
        }


        /**
         * Default
         */

        resource(path: string, controller: string)
        {
            //
        }

        any(path: string, controller: RouterControllerType)
        {
            //
        }


        /**
         * Options
         */

        prefix(path: string)
        {
            this.options.prefix = nodePath.resolve(this.options.prefix, path)
            return this
        }

        namespace(namespace: string)
        {
            this.options.namespace = nodePath.resolve(this.options.namespace, namespace)
            return this
        }

        group(cb: (router: Router) => void)
        {
            cb(Object.assign({}, this))
        }

        addMiddleware(name: string)
        {
            //
        }
    }
}
