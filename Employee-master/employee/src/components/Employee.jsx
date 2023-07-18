function Employee({ employee }) {
  return (
    <div
      className="emp"
      style={{ border: `1px solid ${employee.borderColor}` }}
    >
      <img src={employee.headshot} alt="employee" />
      <h4>{employee.name}</h4>
      <p>{employee.title}</p>
    </div>
  );
}

export default Employee;
