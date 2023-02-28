import User from '../model/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const saltRounds = 10
const myPlaintextPassword = 's0/P4$$w0rD'
const SECRET = process.env.secret_key || ''

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
  const { id } = req.params
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


  // @ts-ignore
  const token = jwt.sign({ id: existingUser._id }, SECRET, { expiresIn: '30s' })
  res.cookie(String(existingUser._id), token, {
    path: '/',
    expires: new Date(Date.now() + 1000 * 30),
    httpOnly: true,
    sameSite: 'lax',
  })
  return res.status(200).json({ message: 'Login Successful', id: existingUser, token })
}
export const verifyToken = (req, res) => {
  const cookies = req.headers.cookie;
  const token = cookies.split('=')[1]
  console.log(token)
  const { id } = req.body
  const headers = req.headers[`Authorization`]
  if (!token) {
    res.status(404).json({ message: ' No token found' })
  }
  jwt.verify(String(token), SECRET, (err, user) => {
    if (err) {
      res.status(400).json({ message: 'Invalid Token' })
    }
    console.log({ id })
    if (user) {
      //@ts-ignore
      req.id = user.id

    }
  })
}
export const getUser = async (req, res) => {
  const userId = req.id
  let user
  try {
    user = await User.findById(userId, '-password')
  } catch (err) {
    return new err(err)
  }
  if (!user) {
    return res.status(404).json({ message: 'User not Found' })
  }
  return res
    .status(200)
    .json({ user })
}