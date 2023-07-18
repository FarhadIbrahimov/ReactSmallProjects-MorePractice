import React from "react";
import ReactDOM from "react-dom/client";
import { data } from "./data.js";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>Hello React</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu(data) {
  return (
    <div>
      <main className="menu">
        <h2>Our menu</h2>
        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photoName="pizzas/spinaci.jpg"
          price={10}
        />
        <Pizza
          name="Pizza Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          photoName="pizzas/focaccia.jpg"
          price={8}
        />
        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          photoName="pizzas/funghi.jpg"
          price={15}
        />
        <Pizza
          name="Pizza Margherita"
          ingredients="Tomato and mozarella"
          photoName="pizzas/margherita.jpg"
          price={12}
        />
        <Pizza
          name="Pizza Salamino"
          ingredients="Tomato, mozarella, and pepperoni"
          photoName="pizzas/salamino.jpg"
          price={14}
        />
        <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          photoName="pizzas/prosciutto.jpg"
          price={17}
        />
      </main>
    </div>
  );
}
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert("We are currently open!");
  //   else alert("Sorry we are closed!");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.We are currently open!
    </footer>
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
