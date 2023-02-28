function onFormSubmit() {
  let FormData = readFormData()
  insertNewRecord(FormData)
}
function readFormData() {
  let formData = {}
  formData["FirstName"] = document.getElementById('fullName').value
  formData["LastName"] = document.getElementById('lastName').value
  formData["Email"] = document.getElementById('email').value
  return formData
}

function insertNewRecord(data) {
  let table = document.getElementById('employeelist')?.getElementsByTagName('tbody')[0]
  let newRow = table.insertRow(table.length)
  cell1 = newRow.insertcell(0)
  cell1.innerHTML = data.lastName
  cell2 = newRow.insertcell(1)
  cell2.innerHTML = data.lastName
  cell3 = newRow.insertcell(2)
  cell3.innerHTML = data.email
  cell4 = newRow.innerHTML = `<a>Edit</a>`
    `<a>Update</a>`
    `<a>Delete</a>` //""'' ``
}





















// document.getElementById('submit').addEventListener('click', (e) => {
//   e.preventDefault()

//   let value = document.getElementById('formData').value
//   let dropdown = document.getElementById('dropdown').value
//   let URL = (`https://streamline-health.vercel.app/api/employ/`)
//   //+value will return a numner for ebc and abv
//   //tyoeof vales in console log will let you know what tyoe of data is in there,
//   console.log(value, dropdown)
//   switch (dropdown) {
//     case 'Create':
//       URL = `${URL}/newEmployee`
//       getData(URL)
//       break
//     case 'Update':
//       tempURL = `https://api.punkapi.com/v2/beers?&abv_gt=${value}`
//       getData(tempURL)
//       break
//     case 'EBC':
//       tempURL = `https://api.punkapi.com/v2/beers?&ebc_gt=${value}`
//       getData(tempURL)
//       break

//     default:
//     //  code block
//   }

// })

// // let data;

// async function getData(tempURL) {
//   let res = await fetch(`${tempURL}`)
//   let json = await res.json()
//   console.log(json)
//   displayItems(json)
//   // data = json
//   // return json;
// }
