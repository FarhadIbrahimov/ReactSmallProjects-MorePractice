import { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import DisplayForm from "../components/DisplayForm";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function HomePage({ employees, addEmployee }) {
  return (
    <div className="home">
      <Header header="Employee Directory" />
      <SearchBar />
      <EmployeeList employees={employees} />
      <DisplayForm addEmployee={addEmployee} />
    </div>
  );
}

export default HomePage;
