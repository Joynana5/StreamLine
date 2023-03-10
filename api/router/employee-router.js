import { Router } from 'express'

import * as controller from '../controller/employee-controller.js'

const employeerouter = Router()

employeerouter.get('/', controller.getAllEmployees)
employeerouter.post('/newEmployee', controller.newEmployee)
employeerouter.patch('/updateEmployee/:id', controller.updateEmployee)
employeerouter.delete('/deleteEmployee/:id', controller.deleteEmployee)

export default employeerouter


