import { Express } from 'express'

declare global
{
    export namespace NodeJS
    {
        export interface Global
        {
            clone(instance)
            env: (name: string, defaultValue?) => void
            hasOwnProperty: (object: Record<string, unknown>, key: string) => boolean
            stringJoin(options: { delimiter?: string, first?: boolean, last?: boolean, trimDelimiterIfExists?: boolean }, ...args: string[]): string
        }
    }
}
