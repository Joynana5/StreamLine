import { Router } from 'express'

import * as controller from '../server/controller/employee-controller.js'


const router = Router()

router.get('/api', controller.getAllEmployees)
router.get('/api/first_name', controller.first_name)
router.get('/api/last_name', controller.last_name)
router.get('/api/birthday', controller.birthday)
router.get('/api/gender', controller.gender)
router.get('/api/status', controller.status)

router.put('/api/employee', controller.updateEmployee)
router.delete('/api/employee', controller.deleteEmployee)


export default router