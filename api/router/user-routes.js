import { Router } from 'express'

import * as controller from '../controller/user-controller.js'


const userrouter = Router()


userrouter.get('/',controller.getUser)
userrouter.post('/signup', controller.signup)
userrouter.post('/login', controller.verifyToken, controller.login)


export default userrouter