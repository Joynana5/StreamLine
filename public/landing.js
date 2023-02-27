// const EmploytempURL = ('http://localhost:3000/test/api/employ')

// const name = document.getElementById('name')
// const password = document.getElementById('password')
// const form = document.getElementById('form')

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
// })
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
  slider.classList.add("moveslider");
  formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
  slider.classList.remove("moveslider");
  formSection.classList.remove("form-section-move");
});


async function getEmployeeData() {
  let res = await fetch('http://localhost:3000/api/employ')
  let json = await res.json()
  console.log(json)
  // data = json
  // return json;
}
getEmployeeData()


const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event) => {
  validateForm();
  console.log(isFormValid());
  if (isFormValid() == true) {
    form.submit();
  } else {
    event.preventDefault();
  }

});

function isFormValid() {
  const inputContainers = form.querySelectorAll('.input-group');
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains('error')) {
      result = false;
    }
  });
  return result;
}


function validateForm() {
  //USERNAME
  if (usernameInput.value.trim() == '') {
    setError(usernameInput, 'Name can not be empty');
  } else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15) {
    setError(usernameInput, 'Name must be min 5 and max 15 charecters');
  } else {
    setSuccess(usernameInput);
  }
  //EMAIL
  if (emailInput.value.trim() == '') {
    setError(emailInput, 'Provide email address');
  } else if (isEmailValid(emailInput.value)) {
    setSuccess(emailInput);
  } else {
    setError(emailInput, 'Provide valid email address');
  }

  //PASSWORD
  if (passwordInput.value.trim() == '') {
    setError(passwordInput, 'Password can not be empty');
  } else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {
    setError(passwordInput, 'Password min 6 max 20 charecters');
  } else {
    setSuccess(passwordInput);
  }
  //CONFIRM PASSWORD
  if (confirmPasswordInput.value.trim() == '') {
    setError(confirmPasswordInput, 'Password can not be empty');
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    setError(confirmPasswordInput, 'Password does not match');
  } else {
    setSuccess(confirmPasswordInput);
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains('success')) {
    parent.classList.remove('success');
  }
  parent.classList.add('error');
  const paragraph = parent.querySelector('p');
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains('error')) {
    parent.classList.remove('error');
  }
  parent.classList.add('success');
}

function isEmailValid(email) {
  const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return reg.test(email);
}



