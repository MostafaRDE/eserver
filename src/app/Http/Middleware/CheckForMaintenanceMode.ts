import { Request, Response, NextFunction } from 'express'

import Middleware from '../../../kernel/Foundation/Http/Middleware'

export class CheckForMaintenanceMode extends Middleware
{
    /**
     * The URIs that should be reachable while maintenance mode is enabled.
     *
     * @var array
     */
    protected $except = [
        //
    ]

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
