/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| The first thing we will do is create a new EServer application instance
| which serves all program at on the your custom port.
|
*/

import * as express from 'express'
global.app = express()

/*
|--------------------------------------------------------------------------
| Bootstrapping and config application
|--------------------------------------------------------------------------
|
| The second thing we will config application for run and use it.
|
*/

import './src/app'

/*
|--------------------------------------------------------------------------
| Running server at the custom port system
|--------------------------------------------------------------------------
|
| After create and config app, then run it at the custom port system.
|
*/

global.app.listen(parseInt(process.env.PROT), process.env.HOSTNAME, () => {
    console.log(`Server start at port ${ process.env.PROT }`)
})
