import employee from '../model/employee.js'


export const getAllEmployees = async (req, res) => {
  let employeesJSON
  try {
    employeesJSON = await employee.find()
    return res.json(employeesJSON)
  } catch (err) {
    console.log(err)
  }
  if (!employeesJSON) {
    return res.status(404).json({ message: 'Employee Not Found' })
  }
  return res
    .status(200)
    .json({ employeesJSON })
}

export const getEmployee = async (req, res) => {
  let Employee
  try {
    Employee = await employee.findById({ first_name: String, last_name: String })
    res.json(Employee)
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
    await Employee.save()
  } catch (err) {
    console.log(err)
  } return res
    .status(201)
    .json({ Employee })

}





