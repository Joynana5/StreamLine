var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './profile.css'
}
const wrapper = document.querySelector('.wrapper')
const signupHeader = document.querySelector('.signup header')
const loginHeader = document.querySelector('.login header')

// function login() {
//   const username = document.getElementById(".email ele").value;
//   const password = document.getElementById(".password ele").value;
  // const xhttp = new XMLHttpRequest();
  // xhttp.open("POST", "https://www.mecallapi.com/api/login");
  // xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // xhttp.send(JSON.stringify({
  //   "username": username,
  //   "password": password
  // }));
  // xhttp.onreadystatechange = function () {
  //   if (this.readyState == 4) {
  //     const objects = JSON.parse(this.responseText);
  //     console.log(objects);
  //     if (objects['status'] == 'ok') {
  //       localStorage.setItem("jwt", objects['accessToken']);
  //       Swal.fire({
  //         text: objects['message'],
  //         icon: 'success',
  //         confirmButtonText: 'OK'
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           window.location.href = './index.html';
  //         }
  //       });
  //     } else {
  //       Swal.fire({
  //         text: objects['message'],
  //         icon: 'error',
  //         confirmButtonText: 'OK'
  //       });
  //     }
  //   }
  // };
//   return false;
// }

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
