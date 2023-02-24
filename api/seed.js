import mongoose from 'mongoose'
import employee from '../server/model/employee.js'
import employeeData from './employee-data.json' assert {type: 'json'}
import user from '../server/model/user.js'
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
  await user.create(user)
  let test2 = await user.find({})
  console.log(test2)
}

await user.create(userData)


await mongoose.disconnect()


