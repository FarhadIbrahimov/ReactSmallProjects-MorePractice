const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  headshot: {
    type: String,
    required: true,
  },
});
const Employees = mongoose.model("employees", employeeSchema);
module.exports = Employees;
