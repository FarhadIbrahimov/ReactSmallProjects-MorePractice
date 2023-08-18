import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";

const initialState = {
  form: { name: "", title: "", phone: "", email: "" },
  error: {
    name: false,
    title: false,
    phone: false,
    email: false,
    submit: true,
  },
};

const methods = {
  greet: () => {
    console.log("hi");
  },

  createEmployee: (state = initialState, action) => {
    switch (action.type) {
      case "name":
        return { name: state.name };
      case "phone":
        return { phone: state.phone };
      case "email":
        return { email: state.email };

      case "title":
        return { title: state.title };
    }
  },
};

const employeeSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: methods,
});

export const store = configureStore({
  reducer: { emplopyeeStore: employeeSlice.reducer },
});
export const { greet } = employeeSlice.actions;
