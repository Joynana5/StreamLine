import { Router } from 'express'

import * as controller from '../server/controller/employee-controller.js'

const employeerouter = Router()

employeerouter.get('/', controller.getAllEmployees)
employeerouter.post('/newEmployee', controller.newEmployee)



export default employeerouter


