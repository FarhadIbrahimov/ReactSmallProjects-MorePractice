import React, { useReducer } from "react";
import formReducer from "./FormReducer.jsx";
import { isValidEmail, isNumeric } from "./Validation";

export default function Form({ addEmployee }) {
  const initialState = {
    form: { name: "", title: "", phone: "", email: "" },
    error: {
      name: false,
      title: false,
      phone: false,
      email: false,
      submit: true,
    },
    readyToClose: true,
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleSubmit(event) {
    event.preventDefault();

    if (
      state.form.name.length === 0 ||
      state.form.title.length === 0 ||
      state.form.phone.length === 0 ||
      state.form.email.length === 0 ||
      !isValidEmail(state.form.email)
    ) {
      dispatch({
        type: "SET_ALL_FIELDS_ERROR",
        errors: {
          name: state.form.name.length === 0,
          title: state.form.title.length === 0,
          phone: state.form.phone.length === 0,
          email:
            state.form.email.length === 0 || !isValidEmail(state.form.email),
          submit: true,
        },
      });
      return;
    }

    let employee = {
      ...state.form,
      headshot: "../images/headshot4.jpeg",
      borderColor: "rgb(100,230,204)",
      id: crypto.randomUUID(),
    };

    let ableToSubmit =
      !state.error.name &&
      !state.error.title &&
      !state.error.phone &&
      !state.error.email;

    if (ableToSubmit) {
      addEmployee(employee);
      dispatch({ type: "RESET_FORM" }); // Reset the form fields
      dispatch({ type: "TOGGLE_CLOSE" }); // Hide the form (assuming the main page means hiding the form)
    } else {
      dispatch({ type: "SET_SUBMIT_ERROR", submitError: !ableToSubmit });
    }
  }

  function handleChange(event) {
    const id = event.target.id;
    let fieldError = false;

    switch (id) {
      case "name":
        fieldError =
          (event.target.value.length <= 3 && event.target.value.length !== 0) ||
          event.target.value.length > 8 ||
          isNumeric(event.target.value);
        break;
      case "phone":
        fieldError = event.target.value.length !== 10;
        break;
      case "email":
        fieldError =
          event.target.value.length === 0 || !isValidEmail(event.target.value);
        break;

      case "title":
        fieldError =
          event.target.value.length === 0 || isNumeric(event.target.value);
        break;
      default:
        break;
    }

    dispatch({
      type: "SET_FIELD",
      field: id,
      value: event.target.value,
      fieldError: fieldError,
    });
  }

  function close() {
    dispatch({ type: "TOGGLE_CLOSE" });
    dispatch({ type: "RESET_FORM" }); // Reset the form fields
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: state.readyToClose ? "none" : "flex" }}
      >
        <label
          htmlFor="name"
          style={{ color: state.error.name ? "red" : "black" }}
        >
          {state.error.name
            ? isNumeric(state.form.name)
              ? "Name can't be just numbers"
              : "(you need to enter more than 3 char or less than 8 char)"
            : "Name"}
        </label>
        <input
          id="name"
          value={state.form.name}
          onChange={handleChange}
          style={{
            border: state.error.name ? "3px solid red" : "",
            boxShadow: state.error.name ? "5px 2px 10px red" : "",
          }}
          placeholder="enter the name"
        />

        <label
          htmlFor="title"
          style={{ color: state.error.title ? "red" : "black" }}
        >
          {state.error.title
            ? isNumeric(state.form.title)
              ? "Title can't be just numbers"
              : "(you have to put the title)"
            : "Title"}
        </label>
        <input
          id="title"
          type="text"
          value={state.form.title}
          onChange={handleChange}
          style={{
            border: state.error.title ? "3px solid red" : "",
            boxShadow: state.error.title ? "5px 2px 10px red" : "",
          }}
          placeholder="enter the title"
        />

        <label
          htmlFor="phone"
          style={{ color: state.error.phone ? "red" : "black" }}
        >
          {state.error.phone
            ? "(The phone number should be 10 numbers)"
            : "Phone"}
        </label>
        <input
          id="phone"
          type="number"
          value={state.form.phone}
          onChange={handleChange}
          style={{
            border: state.error.phone ? "3px solid red" : "",
            boxShadow: state.error.phone ? "5px 2px 10px red" : "",
          }}
          placeholder="enter the phone number"
        />

        <label
          htmlFor="email"
          style={{ color: state.error.email ? "red" : "black" }}
        >
          {state.error.email
            ? state.form.email.length === 0
              ? "Email can't be empty"
              : "Invalid email format"
            : "Email"}
        </label>
        <input
          id="email"
          value={state.form.email}
          onChange={handleChange}
          style={{
            border: state.error.email ? "3px solid red" : "",
            boxShadow: state.error.email ? "5px 2px 10px red" : "",
          }}
          placeholder="enter the email"
        />

        <button
          className="submit"
          style={{
            border: !state.error.submit ? "3px solid red" : "",
            boxShadow: !state.error.submit
              ? " box-shadow: 5px 2px 10px red"
              : "",
            backgroundColor: !state.error.submit ? "red" : "aquamarine",
            color: !state.error.submit ? "white" : "black",
          }}
        >
          {state.error.submit
            ? "Submit"
            : "please make sure that there is no error and nothing is empty"}
        </button>
      </form>
      <button className="close" onClick={close}>
        {state.readyToClose ? "+" : "X"}
      </button>
    </>
  );
}
