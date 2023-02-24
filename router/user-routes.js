import { Router } from 'express'

import * as controller from '../server/controller/user-controller.js'


const userrouter = Router()

userrouter.get('/api/user', controller.getAllUser)
userrouter.post('/api/user/signup', controller.signup)
userrouter.post('/api/user/login', controller.login)


export default userrouter