// @ts-ignore
import { login, signup } from '../server/controller/user-controller.js'


const loginForm = document.querySelector('#login-form')
const loginButton = document.querySelector('#login-button')
const signupForm = document.querySelector('#signup-form')
const signupButton = document.querySelector('#signup-button')

// @ts-ignore
loginButton.addEventListener('click', async () => {
  // @ts-ignore
  const email = loginForm.querySelector('#email-input').value
  // @ts-ignore
  const password = loginForm.querySelector('#password-input').value
  // @ts-ignore
  await login(email, password)
})

// @ts-ignore
signupButton.addEventListener('click', async () => {
  // @ts-ignore
  const name = signupForm.querySelector('#name-input').value
  // @ts-ignore
  const email = signupForm.querySelector('#email-input').value
  // @ts-ignore
  const password = signupForm.querySelector('#password-input').value
  // @ts-ignore
  await signup(name, email, password)
})

