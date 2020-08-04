/*
|--------------------------------------------------------------------------
| Load helpers
|--------------------------------------------------------------------------
|
| In this file, we load all helpers files and save a global variable with
| *helpers* name.
|
*/

// @ts-ignore
let { readdirSync } = require('fs')

readdirSync('./src/kernel/Foundation/Helpers').forEach(file =>
{
    if (file !== 'index.ts' && /\.ts$/.test(file))
    {
        const filename = file.replace(/\.ts$/, '')
        let functions = require(`./${ filename }`)
        Object.keys(functions).forEach(key => {
            global[key] = functions[key]
        })
    }
});
