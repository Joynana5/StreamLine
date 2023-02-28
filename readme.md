# StreamLine

Developed to provide healthcare administrators with a user-friendly application that assists with tracking employee demographics, such as full-name, date of birth and employment status. The user will be able to search, update, edit and delete employee records.


## Authors

[@Joynana5](https://www.github.com/Joynana5)


## Tech Stack

**Client:** HTML, CSS, JavaScript

**Server:** (maybe) Express, Axios, Node


## API Reference
API Reference
 
![image](https://user-images.githubusercontent.com/114016876/220657244-ff8c035a-a05d-41bd-9abc-6946e0eaee4a.png)


#### Data Models

```
const employeeSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: false,
  },
  birthday: {
    type: String,
    required: true,
    maxlength: 10
  },
  gender: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  }
})

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }

})

```





## Employee API
| Route                   | Method    | Action              | Description                               |
| :--------               | :-------  | :--------------     | :------------------                       |
| `/`                     | `Get`     | `Read`              | Lists all employees within the database   |
| `/newEmployee`          | `Post`    | `Create`            | Adds a new employee to the database       |
| `/updateEmployee/:id`   | `Patch`   | `Update`            | Update existing employees information     |
| `/deleteEmployee/:id`   | `Delete`  | `Delete`            | Deletes individual employee from database |


## User API
| Route        | Method    | Action              | Description                               |
| :--------    | :-------  | :--------------     | :------------------                       |
| `/`          | `Get`     | `Read`              | Lists all Users within the database       |
| `/signup`    | `Post`    |  `Create`           | Adds new User to the database             |
| `/login`     | `Post`    | `Read`              | User Authentication; allows administrator to have full CRUD capabilities |




## Run Locally

Clone the project

```bash
  git clone https://www.google.com](https://github.com/Joynana5/StreamLine.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Features

- Employee Database
- User Database
- Full CRUD Capabilities

## Post MVP
- front end application
- User authentication
- Leave tracker


## 


[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/www.linkedin.com/in/joynae-whitehurst) 
