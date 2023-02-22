import { Router } from 'express'

import * as controller from '../server/controller/user-controller.js'


const router = Router()

router.get('/api', controller.getAllUser)
router.post('/api/signup', controller.signup)
router.post('/api/login', controller.login)


export default router