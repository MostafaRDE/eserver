global.router.prefix('/api/v1').namespace('Auth').group((router) =>
{
    router.get('login', 'LoginController@login')
})
