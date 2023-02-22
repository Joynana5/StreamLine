import mongoose from 'mongoose'
import employee from '../server/model/employee.js'
import employeeData from './employee-data.json' assert {type: 'json'}
// Leave these 4 lines
//@ts-ignore
mongoose.connect(process.env.DATABASE_URL)
await seed()
await mongoose.disconnect()

async function seed() {
  await employee.create(employeeData)
  let test = await employee.find({})
  console.log(test)
}




