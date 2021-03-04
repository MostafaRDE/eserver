import ServiceProvider from '../../illuminate/ServiceProvider/ServiceProvider'

export class TranslationServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public boot()
    {
        const i18n = require('i18n')

        // @ts-ignore
        const { readdirSync } = require('fs'),
            locales = []

        readdirSync('./src/locals').forEach(file =>
        {
            locales.push(file.replace(/\.json$/, ''))
        })

        i18n.configure({
            locales,
            queryParameter: 'lang',
            directory: './src/locals',
            register: global,
        })

        global.app.app.use(i18n.init)

    }
}
