const wrapper = document.querySelector('wrapper')
signupHeader = document.querySelector('.signup header')
loginHeader = document.querySelector('.login header')

loginHeader.addEventListener('click', () => {
  wrapper.classList.addEventListener('active')
})