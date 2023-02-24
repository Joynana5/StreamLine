import User from '../model/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const jwt_SECRET_KEY = "MyKey"
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

  const { name, email, password } = req.body
  const { id } = req.body
  let existingUser
  try {

    existingUser = await User.findOne({ id })
  } catch (err) {
    return console.log(err)
  }
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: 'User already Exists! Login Instead' })
  }

  const hashedPassword = bcrypt.hashSync(password, saltRounds)

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
  // const { id } = req.params
  let existingUser
  try {
    existingUser = await User.findOne({ email })
    console.log(existingUser);
  } catch (err) {
    return console.log(err)
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: 'Couldnt Find User By This Email' })
  }

  console.log(existingUser);

  const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: 'Incorrect Email / Password' })
  }

  
  const token = jwt.sign({ id: existingUser._id }, jwt_SECRET_KEY, { expiresIn: '3hr' })
  return res.status(200).json({ message: 'Login Successful', id: existingUser, token })
}
