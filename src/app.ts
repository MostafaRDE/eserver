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
import * as bodyParser from 'body-parser'

export default class App
{
    public app: express.Application
    public port: number

    constructor()
    {
        this.app = express()
        this.port = parseInt(process.env.PORT || '8080')

        this.initializeMiddlewares()
        // this.initializeControllers(controllers)
    }

    private initializeMiddlewares()
    {
        this.app.use(bodyParser.json())
    }

    private initializeControllers(controllers)
    {
        controllers.forEach((controller) =>
        {
            this.app.use('/', controller.router)
        })
    }

    public listen()
    {
        this.app.listen(parseInt(process.env.PROT), process.env.HOSTNAME, () =>
        {
            console.log(`Server start at port ${ process.env.PROT }`)
        })
    }
}
