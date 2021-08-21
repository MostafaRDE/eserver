/*
|--------------------------------------------------------------------------
| Load env variables
|--------------------------------------------------------------------------
|
| The first thing we will loading env variables.
|
*/

const fs = require('fs')
import path from 'path'

require('dotenv').config({ path: '.env' })
if (fs.existsSync(path.resolve(__dirname, `../../../.env.${ process.env.NODE_ENV }`)))
    require('dotenv').config({ path: `.env.${ process.env.NODE_ENV }` })

/*
|--------------------------------------------------------------------------
| Booting yargs for managing command-line
|--------------------------------------------------------------------------
|
| After loading env variables, we need to booting command-line manager
| yargs.
|
*/

require('yargs')
    .commandDir('commands', { extensions: [ 'js', 'ts' ] })
    .demandCommand()
    .help()
    .argv
