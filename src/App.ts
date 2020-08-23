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

import * as express from 'express'
import * as compression from 'compression'
import * as helmet from 'helmet'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as userAgent from 'express-useragent'
import * as cors from 'cors'

import ServiceProvider from './kernel/Support/ServiceProvider'

export default class App
{
    public app: express.Application
    public port: number

    private _serviceProviders: ServiceProvider[]

    constructor()
    {
        this.app = express()
        this.port = parseInt(process.env.PORT || '8080')

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

    /*
    |--------------------------------------------------------------------------
    | Router Initializer
    |--------------------------------------------------------------------------
    |
    | Here initialize routes and add routes in express.
    |
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
        this.app.use(cors())
    }

    public listen()
    {
        this.app.listen(parseInt(process.env.PROT), process.env.HOSTNAME, () =>
        {
            console.log(`Server start at port ${ process.env.PROT }`)
        })
    }
}
