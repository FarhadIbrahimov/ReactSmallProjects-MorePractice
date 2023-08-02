import { createContext, useContext, useState, useEffect } from "react";

// We are creating a special container to store data that we can access from different parts of our app.
const AppContext = createContext();

// We are defining a special component called 'AppProvider' that will be responsible for providing data to other parts of our app.
// The 'children' here are the components that are inside this 'AppProvider' component.
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
  };

  // Inside the 'AppProvider' component, we are using the 'AppContext.Provider' to store the greeting data so that other components can use it.
  // We provide the 'greeting' data as the value, and we wrap all the 'children' components with the 'AppContext.Provider'.
  // This way, all the 'children' components will have access to the 'greeting' data.
  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarTheme }}>
      {children}
    </AppContext.Provider>
  );
};
// We are defining a special function called 'useGlobalContext' that allows us to easily access the data stored in the 'AppContext'.
export const useGlobalContext = () => useContext(AppContext);
