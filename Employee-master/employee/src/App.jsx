import "./index.css";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import { data } from "./data";
import EmployeePage from "./components/EmployeePage";
import { Routes, Route, useParams } from "react-router-dom";
export default function App() {
  let [employees, setEmployees] = useState(data);

  function addEmployee(emp) {
    setEmployees([...employees, emp]);
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<HomePage employees={employees} addEmployee={addEmployee} />}
        />
        <Route
          path="/:employee"
          element={<EmployeePage employees={employees} />}
        />
      </Routes>
    </div>
  );
}
