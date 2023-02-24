import { Router } from 'express'

import * as controller from '../server/controller/user-controller.js'


const userrouter = Router()

userrouter.get('/', controller.getAllUser)
userrouter.post('/signup', controller.signUp)
userrouter.post('/login', controller.login)


export default userrouter