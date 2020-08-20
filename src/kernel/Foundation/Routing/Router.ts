import * as ExpressRouterImporter from 'express'

export namespace Kernel.Foundation.Routing
{
    import ExpressRouter = ExpressRouterImporter.Router

    export class Router
    {
        /**
         * The express router.
         */
        protected eRouter

        /**
         * The route collection instance.
         */
        protected routes

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
        }

        /**
         * Register a short-hand name for a middleware.
         */
        public aliasMiddleware(name, _class)
        {
            this.middlewareRoutes[ name ] = _class
        }

        public builder()
        {
            global.app.use('', this.eRouter)
        }
    }
}
