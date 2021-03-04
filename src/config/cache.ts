const isProduction = process.env.NODE_ENV === 'production'

module.exports = {

    /*
    |--------------------------------------------------------------------------
    | Caching Time
    |--------------------------------------------------------------------------
    |
    | This option controls the default cache time for user.
    |
    */

    maxAge: isProduction ? 1000 * 60 * 60 * 24 * 30 : 0,

    /*
    |--------------------------------------------------------------------------
    | Cache Routes
    |--------------------------------------------------------------------------
    |
    | This option controls the default cache routes for user.
    |
    */

    routes: [
        { path: './uploads', url: '/uploads', canCache: true },
    ],

}
