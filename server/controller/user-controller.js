import User from '../model/user.js'
import bcrypt from 'bcrypt'

const saltRounds = 10
const myPlaintextPassword = 's0/P4$$w0rD'


export const getAllUser = async (req, res) => {
  let users
  try {
    users = await User.find()
  } catch (err) {
    console.log(err)
  }
  if (!users) {
    return res.status(404).json({ message: 'User not Found' })
  }
  return res
    .status(200)
    .json({ users })
}
export const signup = async (req, res) => {
  // password needed in the function below
  const { name, email } = req.body

  let existingUser
  try {
    existingUser = await User.findOne({ email })
  } catch (err) {
    return console.log(err)
  }
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: 'User already Exists! Login Instead' })
  }

  const hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds)

  const user = new User({
    name,
    email,
    password: hashedPassword,
  })
  try {
    await user.save()
  } catch (err) {
    console.log(err)
  }
  return res
    .status(201)
    .json({ user })
}
export const login = async (req, res) => {
  const { email, password } = req.body
  let existingUser
  try {
    existingUser = await User.findOne({ email })
  } catch (err) {
    return console.log(err)
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: 'Couldnt Find User By This Email' })
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: 'Incorrect Email / Password' })
  }
  return res.status(200).json({ message: 'Login Successful' })
}

exports.signup = signup
exports.login = login