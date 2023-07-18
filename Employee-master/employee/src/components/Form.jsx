import { useState } from "react";

export default function Form({ addEmployee }) {
  let [form, setForm] = useState({
    name: "",
    title: "",
    phone: "",
    email: ""
  });

  function handleSubmit(event) {
    event.preventDefault();

    let employee = {
      ...form,
      headshot: "../images/headshot4.jpeg",
      borderColor: "rgb(100,230,204)",
      id: crypto.randomUUID()
    };

    setForm({
      name: "",
      title: "",
      phone: "",
      email: ""
    });

    addEmployee(employee);
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.id]: event.target.value
    });
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" value={form.name} onChange={handleChange} />

      <label htmlFor="title">Title</label>
      <input id="title" value={form.title} onChange={handleChange} />

      <label htmlFor="phone">Phone</label>
      <input id="phone" value={form.phone} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input id="email" value={form.email} onChange={handleChange} />

      <button>Submit</button>
    </form>
   
     </>
  );
  

}
