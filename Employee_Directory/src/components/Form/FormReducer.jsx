export default function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        form: { ...state.form, [action.field]: action.value },
        error: { ...state.error, [action.field]: action.fieldError },
      };
    case "SET_SUBMIT_ERROR":
      return {
        ...state,
        error: { ...state.error, submit: action.submitError },
      };
    case "SET_ALL_FIELDS_ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          name: action.errors.name,
          title: action.errors.title,
          phone: action.errors.phone,
          email: action.errors.email,
          submit: action.errors.submit,
        },
      };

    case "RESET_FORM":
      return {
        ...state,
        form: {
          name: "",
          title: "",
          phone: "",
          email: "",
        },
      };
    case "TOGGLE_CLOSE":
      return {
        ...state,
        readyToClose: !state.readyToClose,
      };
    default:
      return state;
  }
}
