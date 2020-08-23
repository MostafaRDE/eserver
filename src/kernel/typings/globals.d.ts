import Router from '../Foundation/Routing/Router'
import App from '../../App'

declare global
{
    export namespace NodeJS
    {
        export interface Global
        {
            app: App
            config: Record<string, unknown>
            resolve: (subPath: string) => ''
            router: Router
        }
    }
}
