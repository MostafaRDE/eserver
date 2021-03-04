import Router from '../illuminate/Http/Routing/Router'
import App from '../App'
import NotificationManager from './../Support/Notification/core/Notification'

declare global
{
    export namespace NodeJS
    {
        export interface Global
        {
            // <editor-fold desc="App">

            __: (translation: string) => ''
            app: App
            config: Record<string, any>
            resolve: (subPath: string) => ''
            router: Router

            // <editor-fold>


            // <editor-fold desc="Database">

            // @ts-ignore
            DB: DB.prototype
            // @ts-ignore
            Model: Model.prototype
            // @ts-ignore
            DBInstanceCreator: DBInstanceCreator.prototype
            DBEnums: { enumDrivers, enumModelTypes, enumQueryTypes }

            // </editor-fold>


            // <editor-fold desc="Translation">

            t: (text: string) => string | Record<string, unknown>

            // </editor-fold>
        }
    }
}
