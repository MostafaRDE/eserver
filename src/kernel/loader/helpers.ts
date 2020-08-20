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
const { readdirSync } = require('fs')

readdirSync('./src/kernel/Foundation/Helpers').forEach(file => {
    if (/\.ts$/.test(file)) {
        const filename = file.replace(/\.ts$/, '')
        const functions = require(`../Foundation/Helpers/${ filename }`)
        Object.keys(functions).forEach(key => {
            global[ key ] = functions[ key ]
        })
    }
})
