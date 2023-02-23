import mongoose from 'mongoose'
import { newEmployee } from '../server/controller/employee-controller.js'
import employee from '../server/model/employee.js'
import employeeData from './employee-data.json' assert {type: 'json'}
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

await employee.create(newEmployee)

await mongoose.disconnect()


