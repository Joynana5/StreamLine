import { Router } from 'express'

import * as controller from '../controller/user-controller.js'


const userrouter = Router()

userrouter.get('/', controller.getAllUser)
userrouter.post('/signup', controller.signup)
userrouter.post('/login', controller.login)


export default userrouter