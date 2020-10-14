import Router from '../Foundation/Http/Routing/Router'
import App from '../App'
import { instanceCreator } from 'eloquent-orm-node/dist/lib/eloquent/Model'

declare global
{
    export namespace NodeJS
    {
        export interface Global
        {
            // App

            __: (translation: string) => ''
            app: App
            config: Record<string, unknown>
            resolve: (subPath: string) => ''
            router: Router


            // Database

            // @ts-ignore
            DB: DB.prototype
            // @ts-ignore
            Model: Model.prototype
            // @ts-ignore
            DBInstanceCreator: instanceCreator.prototype
            DBEnums: { enumDrivers, enumModelTypes, enumQueryTypes }


            // Translation

            t: (text: string) => string | Record<string, unknown>
        }
    }
}
