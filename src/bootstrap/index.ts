/*
|--------------------------------------------------------------------------
| Run *Initializer* mini-program
|--------------------------------------------------------------------------
|
| For bootstrapping foundation and main your program.
|
*/

import '../kernel/Initializer'

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| The next, we will do is create a new EServer application instance
| which serves all program at on the your custom port.
|
*/

import App from '../kernel/App'
global.app = new App()

/*
|--------------------------------------------------------------------------
| Service Providers
|--------------------------------------------------------------------------
|
| Here we need setup providers by behavior steps:
| 1- Registering Service Providers
| 2- Booting Service Providers
|
*/

import '../kernel/Foundation/booter'
