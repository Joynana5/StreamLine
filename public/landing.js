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



