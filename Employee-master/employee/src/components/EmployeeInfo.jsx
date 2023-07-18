const InfoCard = function ({ header, info }) {
  return (
    <div className="info-card">
      <div className="info-text">
        <h3>{header}</h3>
        <p>{info}</p>
      </div>
      <button className="expand-button"> &gt; </button>
    </div>
  );
};

const EmployeeInfo = function (properties) {
  const employee = properties.employee;
  const phoneHeader1 = "Call Office";
  const phoneHeader2 = "Call Mobile";
  const phoneHeader3 = "SMS";
  const emailHeader = "Email";
  return (
    <form>
      <InfoCard header={phoneHeader1} info={employee.phone} />
      <InfoCard header={phoneHeader2} info={employee.phone} />
      <InfoCard header={phoneHeader3} info={employee.phone} />
      <InfoCard header={emailHeader} info={employee.email} />
    </form>
  );
};

export { InfoCard, EmployeeInfo };
