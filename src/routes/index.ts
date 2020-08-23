/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Here is where you can register routes for your application. These routes
| are loaded by the RouteServiceProvider.
| Now create something great!
|
*/

global.router.prefix('api/v1').group((router) =>
{
    router.namespace('Auth').group((router) =>
    {
        router.get('login', 'LoginController@login')
    })
})
