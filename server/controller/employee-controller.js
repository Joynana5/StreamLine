import employee from '../model/employee.js'


export const getAllEmployees = async (req, res) => {
  let employees
  try {
    employees = await employee.find()
  } catch (err) {
    console.log(err)
  }
  if (!employees) {
    return res.status(404).json({ message: 'Employee Not Found' })
  }
  return res
    .status(200)
    .json({ employees })
}

export const getEmployee = async (req, res) => {
  let Employee
  try {
    Employee = await employee.findById({ first_name: String, last_name: String })
  } catch (err) {
    console.log(err)
  }
  if (!Employee) {
    return res.status(404).json({ message: 'Employee not Found' })
  }
  return res
    .status(200)
    .json({ Employee })
}

export const newEmployee = async (req, res) => {
  const { first_name, last_name, email, birthday, gender } = req.body
  let existingEmployee
  try {
    existingEmployee = await employee.findOne({ email })
  } catch (err) {
    return console.log(err)
  }
  if (!existingEmployee) {
    return res
      .status(400)
      .json({ message: 'Employee already Exists!' })
  }
  const Employee = new employee({
    first_name,
    last_name,
    email,
    birthday,
    gender,
  })
  try {
    await employee.Save()
  } catch (err) {
    console.log(err)
  } return res
    .status(201)
    .json({ Employee })
}





