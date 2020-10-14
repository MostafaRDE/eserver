/*
|--------------------------------------------------------------------------
| Application Class
|--------------------------------------------------------------------------
|
| This we create a base class for managing application.
| Here we manage middlewares, controllers and others for manage
| application.
|
*/

import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import userAgent from 'express-useragent'
import cors from 'cors'

import HttpKernel from '../app/Http/Kernel'
import ServiceProvider from './Foundation/ServiceProvider'

export default class App
{
    /**
     * Express Application Config
     */
    public app: express.Application
    public port: number
    public httpKernel: HttpKernel

    /**
     * Service providers list
     */
    private _serviceProviders: ServiceProvider[]

    constructor()
    {
        this.app = express()
        this.port = parseInt(process.env.PORT || '8080')
        this.httpKernel = new HttpKernel()
        this.httpKernel.syncMiddlewareToRouter()

        this.initializeExpressMiddlewares()
    }

    get serviceProviders(): ServiceProvider[]
    {
        return this._serviceProviders
    }

    set serviceProviders(serviceProviders)
    {
        this._serviceProviders = serviceProviders
    }

    /**
     * Express Middlewares Initializer
     *
     * Here initialize routes and add routes in express.
     */
    private initializeExpressMiddlewares()
    {
        this.app.use(compression({ threshold: 0 }))
        this.app.use(
            helmet({
                contentSecurityPolicy: false,
            }),
        )
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(cookieParser())
        this.app.use(userAgent.express())
        this.app.use(cors(global.config.cors))
    }

    /**
     * Starting server
     */
    public listen()
    {
        this.app.listen(parseInt(process.env.PORT), () =>
        {
            console.log(`Server start at port ${ process.env.PORT }`)
        })
    }
}
