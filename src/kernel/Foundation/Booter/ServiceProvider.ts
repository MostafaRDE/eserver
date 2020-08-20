/*
|--------------------------------------------------------------------------
| Service Providers List
|--------------------------------------------------------------------------
|
| Here get service providers list into the *serviceProviders* variable.
|
*/

let serviceProviders = global.config['app']['providers'].map(sp =>  new sp())

/*
|--------------------------------------------------------------------------
| Registering Service Providers
|--------------------------------------------------------------------------
|
| We first need to register service providers before boot and  loading
| system parts.
|
*/

serviceProviders.forEach(sp => {
    if (typeof sp['register'] === 'function')
        sp.register()
})

/*
|--------------------------------------------------------------------------
| Booting Service Providers
|--------------------------------------------------------------------------
|
| We second need to call boot function service providers for starting
| system parts.
|
*/

serviceProviders.forEach(sp => {
    if (typeof sp['boot'] === 'function')
        sp.boot()
})
