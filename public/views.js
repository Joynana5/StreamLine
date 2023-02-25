
const wrapper = document.querySelector('.wrapper')
const signupHeader = document.querySelector('.signup header')
const loginHeader = document.querySelector('.login header')



// @ts-ignore
loginHeader.addEventListener('click', (e) => {
  // @ts-ignore
  wrapper.classList.add('active')
})

// @ts-ignore
signupHeader.addEventListener('click', (e) => {
  // @ts-ignore
  wrapper.classList.remove('active')
})
