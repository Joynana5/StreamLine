import mongoose from 'mongoose'
import { newEmployee } from '../server/controller/employee-controller.js'
import employee from '../server/model/employee.js'
import employeeData from './employee-data.json' assert {type: 'json'}
import user from '../server/model/user.js'
import { signUp } from '../server/controller/user-controller.js'
// Leave these 4 lines
//@ts-ignore

mongoose.connect(process.env.DATABASE_URL)
await seed()

async function seed() {
  await employee.deleteMany()
  await employee.create(employeeData)
  let test = await employee.find({})
  console.log(test)
}


await userseed()
async function userseed() {
  await user.deleteMany()
  await user.create(user)
  let test2 = await user.find({})
  console.log(test2)
}

await user.create(signUp)
await employee.create(newEmployee)


await mongoose.disconnect()


