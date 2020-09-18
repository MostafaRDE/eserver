/*
|--------------------------------------------------------------------------
| Root Directory Resolver
|--------------------------------------------------------------------------
|
| At the start, we create root directory resolver in global variable.
|
*/

const path = require('path')
global.resolve = subPath => path.resolve(__dirname, subPath)

/*
|--------------------------------------------------------------------------
| Bootstrapping and config application
|--------------------------------------------------------------------------
|
| The first thing we will config application for run and use it.
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
