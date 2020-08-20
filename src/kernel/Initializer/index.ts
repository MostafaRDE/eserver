/*
|--------------------------------------------------------------------------
| Load env variables
|--------------------------------------------------------------------------
|
| The first thing we will loading env variables.
|
*/

const fs = require('fs')

require('dotenv').config({ path: `.env` })
if (fs.existsSync(global.resolve(`.env.${ process.env.NODE_ENV }`)))
    require('dotenv').config({ path: `.env.${ process.env.NODE_ENV }` })

/*
|--------------------------------------------------------------------------
| Load helpers
|--------------------------------------------------------------------------
|
| For easy work with program, we need load some foundation helpers in
| first time.
|
*/

import '../loader/helpers'

/*
|--------------------------------------------------------------------------
| Load configs
|--------------------------------------------------------------------------
|
| After load env variables and helpers, we load all configs and save it
| in global variables.
|
*/

import '../loader/config'


/*
|--------------------------------------------------------------------------
| Load Languages
|--------------------------------------------------------------------------
|
| Here we loads languages or glossaries of application.
|
*/

import '../../i18n'
