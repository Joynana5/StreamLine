import { Router } from 'express'

import * as controller from '../server/controller/user-controller.js'


const userrouter = Router()

userrouter.get('/api', controller.getAllUser)
userrouter.post('/api/signup', controller.signup)
userrouter.post('/api/login', controller.login)


export default userrouter