import { Router } from 'express'

import * as controller from '../server/controller/employee-controller.js'

const router = Router()

router.get('/api', controller.getAllEmployees)
router.put('/api/newEmployee', controller.newEmployee)


// router.put('/api/employee', controller.updateEmployee)
// router.delete('/api/employee', controller.deleteEmployee)


export default router