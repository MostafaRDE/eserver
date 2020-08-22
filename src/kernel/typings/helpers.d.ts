import { Express } from 'express'

declare global
{
    export namespace NodeJS
    {
        export interface Global
        {
            env: (name: string, defaultValue?) => void
            hasOwnProperty: (object: Record<string, unknown>, key: string) => boolean
        }
    }
}
