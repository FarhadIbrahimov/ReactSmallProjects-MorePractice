import React from "react";
import ReactDOM from "react-dom/client";
import { data } from "./data.js";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()}.We are currently opoen!</footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //during development it will render all components twice in order to find
  //    certain bugs. And also React will check if we're using outdated parts of the
  //    React API.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
