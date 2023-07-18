import Form from "./Form";
import { useState } from "react";

export default function DisplayForm({ addEmployee }) {
  const [isShown, setIsShown] = useState(false);

  ("Hide");

  function display() {
    setIsShown((current) => !current);
  }

  return (
    <div>
      <button onClick={display}> {!isShown ? "Add Employee" : "Hide"}</button>
      {isShown && <Form addEmployee={addEmployee} />}
    </div>
  );
}
