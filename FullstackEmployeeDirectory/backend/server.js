const express = require("express");
const cors = require("cors");
const mongoConfig = require("./config");
require("dotenv").config();
mongoConfig();
const app = express();
const Employees = require("./models/EmployeeDB");
app.use(cors());
app.use(express.json());

//"index" route
app.get("/", async (req, res) => {
  try {
    const employees = await Employees.find();
    res.status(200).json(employees);
  } catch (error) {
    console.log(err.message);
    res.status(404).json({ error: err.message });
  }
});

app.post("/create", async (req, res) => {
  console.log("Created!!!!");
  await Employees.create();
});

app.listen(5000, () => {
  console.log("Listening on port", "http://localhost:5000");
});
