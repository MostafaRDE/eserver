/*
|--------------------------------------------------------------------------
| Router Instance
|--------------------------------------------------------------------------
|
| Here create instance from main internal router.
|
*/

const Router = require('../Routing/Router').default

/*
|--------------------------------------------------------------------------
| Store Internal Router
|--------------------------------------------------------------------------
|
| For use router in every where, we need to store it in  global variable.
|
*/

Object.defineProperty(global, 'router', {
    get: () => new Router,
})

/*
|--------------------------------------------------------------------------
| Loading Routes
|--------------------------------------------------------------------------
|
| Here we load aal routes of your application from './src/routes'.
|
*/

import '../../../routes'

/*
|--------------------------------------------------------------------------
| Routing Builder
|--------------------------------------------------------------------------
|
| Then we built routing of application.
|
*/

global.router.builder()
