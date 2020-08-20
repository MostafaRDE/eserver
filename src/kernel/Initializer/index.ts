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

import '../Foundation/Helpers'

/*
|--------------------------------------------------------------------------
| Load configs
|--------------------------------------------------------------------------
|
| After load env variables and helpers, we load all configs and save it
| in global variables.
|
*/

import '../../config'

/*
|--------------------------------------------------------------------------
| Service Providers
|--------------------------------------------------------------------------
|
| Here we need setup providers by behavior steps:
| 1- Registering Service Providers
| 2- Booting Service Providers
|
*/

import '../Foundation/Booter'
