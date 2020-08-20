import { Express } from 'express'
import * as RouterImporter from '../Foundation/Routing/Router'
import Router = RouterImporter.Kernel.Foundation.Routing.Router

declare global
{
    export namespace NodeJS
    {
        export interface Global
        {
            app: Express
            config: Object
            resolve: (subPath: string) => ''
            router: Router
        }
    }
}
