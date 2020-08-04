import { Express } from 'express'

declare global
{
    export namespace NodeJS
    {
        export interface Global
        {
            app: Express
            config: Object
        }
    }
}
