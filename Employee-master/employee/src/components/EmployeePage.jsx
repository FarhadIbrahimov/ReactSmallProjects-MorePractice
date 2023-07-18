import React from "react";
import EmployeeInfo from "./EmployeeInfo";
import Header from "./Header";
import Employee from "./Employee";
import { useParams } from "react-router-dom";

export default function EmployeePage({ employees }) {
  const HEADER = "Employee";
  const params = useParams();
  const employee = employees;
  return (
    <section className="employee-page">
      <Header hasButton={true} header={HEADER} />
      <Employee className="large" employee={employee} />
      <EmployeeInfo employee={employee} />
    </section>
  );
}
