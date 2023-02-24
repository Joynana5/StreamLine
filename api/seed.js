import mongoose from 'mongoose'
import employee from './model/employee.js'
import employeeData from './employee-data.json' assert {type: 'json'}
import user from './model/user.js'
import userData from './user-data.json' assert {type: 'json'}

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
  await user.create(userData)
  let test2 = await user.find({})
  console.log(test2)
}



await mongoose.disconnect()


