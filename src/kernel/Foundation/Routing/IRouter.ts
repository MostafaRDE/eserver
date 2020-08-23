import Router from './Router'

export type RouterControllerType = string | ((...args) => void)

export interface IRouter
{
    /**
     * Methods
     */
    all(path: string, controllerHandler: RouterControllerType)
    get(path: string, controllerHandler: RouterControllerType)
    patch(path: string, controllerHandler: RouterControllerType)
    post(path: string, controllerHandler: RouterControllerType)
    put(path: string, controllerHandler: RouterControllerType)
    delete(path: string, controllerHandler: RouterControllerType)

    /**
     * Default
     */
    resource(path: string, controllerHandler: string)

    /**
     * Options
     */
    namespace(namespace: string)
    prefix(path: string)
    group(cb: (router: Router) => void)
    addMiddleware(name: string)
}
