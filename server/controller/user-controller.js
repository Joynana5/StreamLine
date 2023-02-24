import User from '../model/user.js'
import bcrypt from 'bcrypt'

const saltRounds = 10
const myPlaintextPassword = 's0/P4$$w0rD'

export const getAllUser = async (req, res) => {
  let usersJSON
  try {
    usersJSON = await User.find()
    return res.json(usersJSON)
  } catch (err) {
    console.log(err)
  }
  if (!usersJSON) {
    return res.status(404).json({ message: 'User not Found' })
  }
  return res.status(200).json({ usersJSON })
}

export const signUp = async () => {
  const nameInput = document.getElementById('name')
  const emailInput = document.getElementById('email')
  const passwordInput = document.getElementById('password')
 
  const name = nameInput.value
  const email = emailInput.value
  const password = passwordInput.value

  if (!name || !email || !password) {
    return alert('Invalid Request Body. Name, email and password are required.')
  }

  let existingUser
  try {
    existingUser = await User.findOne({ email })
  } catch (err) {
    return console.log(err)
  }
  if (existingUser) {
    return alert('User already exists! Login instead.')
  }

  let hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds)

  const user = new User({
    name,
    email,
    password: hashedPassword,
  })
  try {
    await user.save()
    return alert('Sign up successful.')
  } catch (err) {
    console.log(err)
  }
}

export const login = async () => {
  const emailInput = document.getElementById('email')
  const passwordInput = document.getElementById('password')

  const email = emailInput.value
  const password = passwordInput.value

  let existingUser
  try {
    existingUser = await User.findOne({ email })
  } catch (err) {
    return console.log(err)
  }
  if (!existingUser) {
    return alert('Couldn't find user by this email.')
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
  if (!isPasswordCorrect) {
    return alert('Incorrect password.')
  }
  return alert('Login successful.')
}

export const userLogin = async (req, res) => {
  res.render(login)
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
    return res.status(400).json({ message: 'Incorrect Password' })
  }
  return res.status(200).json({ message: 'Login Successful' })
}


