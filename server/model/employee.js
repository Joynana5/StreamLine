import mongoose from 'mongoose'


const Schema = mongoose.Schema

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

export default mongoose.model('Employee', employeeSchema)
