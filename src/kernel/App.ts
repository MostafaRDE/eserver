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
import formData from 'express-form-data'
import mkdirp from 'mkdirp'

import HttpKernel from '../app/Http/Kernel'
import ServiceProvider from './illuminate/ServiceProvider/ServiceProvider'
import moment from 'moment'

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


        /**
         * Options are the same as multiparty takes.
         * But there is a new option "autoClean" to clean all files in "uploadDir" folder after the response.
         * By default, it is "false".
         */
        const options = {
            get uploadDir()
            {
                const date = moment()
                const path = `${ process.env.UPLOADS_DIR }/${ date.format('YYYY') }/${ date.format('MM') }/${ date.format('DD') }`
                mkdirp.sync(path)
                return path
            },
            autoClean: false,
        }

        // parse data with connect-multiparty.
        this.app.use(formData.parse(options))
        // delete from the request all empty files (size == 0)
        this.app.use(formData.format())
        // change the file objects to fs.ReadStream
        this.app.use(formData.stream())
        // union the body and the files
        this.app.use(formData.union())
    }

    /**
     * Starting server
     */
    public listen()
    {
        this.app.listen(parseInt(process.env.PORT), () =>
        {
            console.log(`Server start at: http://localhost:${ process.env.PORT }`)
        })
    }
}
