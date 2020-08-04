/*
|--------------------------------------------------------------------------
| Load configs
|--------------------------------------------------------------------------
|
| In this file, we load all config files and save a global variable with
| *config* name.
|
*/

// @ts-ignore
const { readdirSync } = require('fs'),
    config = {}

readdirSync('./src/config').forEach(file =>
{
    if (file !== 'index.ts' && /\.ts$/.test(file))
    {
        const filename = file.replace(/\.ts$/, '')
        config[filename] = require(`./${ filename }`)
    }
});

global.config = config
