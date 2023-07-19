import Pizza from "./Pizza";
import { pizzaData } from "../data"; // Importing from one directory up

export default function Menu() {
  return (
    <div>
      <main className="menu">
        <h2>Our menu</h2>

        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </main>
    </div>
  );
}
