/*
|--------------------------------------------------------------------------
| Root Directory Resolver
|--------------------------------------------------------------------------
|
| After, we create root directory resolver in global variable.
|
*/

const path = require('path')
global.resolve = subPath => path.resolve(__dirname, subPath)

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| The first thing we will do is create a new EServer application instance
| which serves all program at on the your custom port.
|
*/

import App from './src/App'
global.app = new App()

/*
|--------------------------------------------------------------------------
| Bootstrapping and config application
|--------------------------------------------------------------------------
|
| The second thing we will config application for run and use it.
|
*/

import './src/bootstrap'

/*
|--------------------------------------------------------------------------
| Running server at the custom port system
|--------------------------------------------------------------------------
|
| After create and config app, then run it at the custom port system.
|
*/

global.app.listen()
