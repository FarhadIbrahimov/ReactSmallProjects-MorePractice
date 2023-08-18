import "./index.css";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import { data } from "./data";
import { Routes, Route } from "react-router-dom";
import EmployeePage from "./Pages/EmployeePage";
import axios from "axios";
import Form2 from "./components/Form2";

export default function App() {
  const [chosenEmployee, setChosenEmployee] = useState({});
  let [employees, setEmployees] = useState();

  useEffect(() => {
    async function getEmpData() {
      // const response = await fetch("http://localhost:5000");
      // const dataEmployee = await response.json();
      const response = await axios.get("http://localhost:5000", employees);
      console.log(response.data);
      addEmployee(response.data);
    }
    getEmpData();
  }, []);

  function handleDelete(id) {
    let newEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(newEmployees);
  }

  async function addEmployee(emp) {
    try {
      const response = await axios.post("/create", emp);
      const newEmployee = await response.data;
      setEmployees([...employees, newEmployee]);
    } catch (error) {
      console.log(error);
    }
  }

  function filterEmployee(searchInput) {
    const filterEmp = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchInput) ||
        employee.title.toLowerCase().includes(searchInput)
    );

    if (searchInput.length < 2) {
      setEmployees(data);
    } else {
      setEmployees(filterEmp);
    }
  }
  return employees ? (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              employees={employees}
              addEmployee={addEmployee}
              filterEmployee={filterEmployee}
              setChosenEmployee={setChosenEmployee}
              handleDelete={handleDelete}
            />
          }
        />
        <Route
          path="/employee"
          element={<EmployeePage employee={chosenEmployee} />}
        />
      </Routes>
    </div>
  ) : (
    <Form2 />
  );
}
