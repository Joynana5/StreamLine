import express from 'express'
import mongoose from 'mongoose'
import lifecycle from './middleware/lifecycle.js'
import employeerouter from '../router/employee-router.js'
import userrouter from '../router/user-routes.js'
import Handlebars from 'handlebars'
import path from 'path'


mongoose.set('strictQuery', false)

const app = express()
const templatePath = path.join(__dirname, './Users/joynae/GA/Unit 2/Project/project-2-demo/templates')

app.use(express.json())
app.set('view engine', Handlebars)
app.set('views', templatePath)




app.use(lifecycle({
  async setup() {
    console.log('Before handler')
    // Put your database connection here. e.g.
    // @ts-ignore
    await mongoose.connect(process.env.DATABASE_URL)
  },
  async cleanup() {
    console.log('After handler')
    // Put your database disconnection here. e.g.
    await mongoose.disconnect()
  }
}))

// Feel free to use a router and move this elsewhere.

app.use('/api/employee', employeerouter)

app.use(express.urlencoded({ extended: false }))

app.use('/api/auth', userrouter)

// Don't use app.listen. Instead export app.
export default app