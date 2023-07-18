import "./index.css";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import { data } from "./data";

export default function App() {
  let [employees, setEmployees] = useState(data);

  function addEmployee(emp) {
    setEmployees([...employees, emp]);
  }

  return (
    <div>
      <HomePage employees={employees} addEmployee={addEmployee} />
    </div>
  );
}
