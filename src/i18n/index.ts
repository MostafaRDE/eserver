const i18n = require('i18n')

// @ts-ignore
const { readdirSync } = require('fs'),
    locales = []

readdirSync('./src/i18n/locals').forEach(file =>
{
    locales.push(file.replace(/\.json$/, ''))
})

i18n.configure({
    locales,
    queryParameter: 'lang',
    directory: './src/i18n/locals',
    register: global,
})

global.app.app.use(i18n.init)
