/*
|--------------------------------------------------------------------------
| Router Instance
|--------------------------------------------------------------------------
|
| Here create instance from main internal router.
|
*/

const Router = require('../Routing/Router')

/*
|--------------------------------------------------------------------------
| Store Internal Router
|--------------------------------------------------------------------------
|
| For use router in every where, we need to store it in  global variable.
|
*/

global.router = new Router()

/*
|--------------------------------------------------------------------------
| Routing Builder
|--------------------------------------------------------------------------
|
| Then we built routing of application.
|
*/

global.router.builder()
