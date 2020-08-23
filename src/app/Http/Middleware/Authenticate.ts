import { Request, Response, NextFunction } from 'express'

import Middleware from '../../../kernel/Foundation/Http/Middleware'

export class Authenticate extends Middleware
{
    /**
     * The application's middleware runner.
     *
     * @var array
     */
    public runner()
    {
        return (request: Request, response: Response, next: NextFunction) =>
        {
            return next()
        }
    }
}
