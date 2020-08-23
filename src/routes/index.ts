global.router.prefix('api/v1').group((router) =>
{
    router.namespace('Auth').group((router) =>
    {
        router.get('login', 'LoginController@login')
    })
})
