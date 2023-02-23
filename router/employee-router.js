import { Router } from 'express'

import * as controller from '../server/controller/employee-controller.js'

const employeerouter = Router()

employeerouter.get('/', controller.getAllEmployees)
employeerouter.put('/newEmployee', controller.newEmployee)


// router.put('/api/employee', controller.updateEmployee)
// router.delete('/api/employee', controller.deleteEmployee)


export default employeerouter