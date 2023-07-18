import Employee from "./Employee";

function EmployeeList({ employees }) {
  return (
    <div className="emp-list">
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
