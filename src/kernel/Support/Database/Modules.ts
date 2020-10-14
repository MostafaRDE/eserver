import 'eloquent-orm-node/dist/lib'
import Model, { instanceCreator } from 'eloquent-orm-node/dist/lib/eloquent/Model'
import enumDrivers from 'eloquent-orm-node/dist/lib/modules/enums/Drivers'
import enumModelTypes from 'eloquent-orm-node/dist/lib/modules/enums/ModelTypes'
import enumQueryTypes from 'eloquent-orm-node/dist/lib/modules/enums/QueryTypes'

global.Model = Model
global.DBInstanceCreator = instanceCreator
global.DBEnums = {
    enumDrivers,
    enumModelTypes,
    enumQueryTypes,
}
