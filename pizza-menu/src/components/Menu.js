import Pizza from "./Pizza";

export default function Menu(data) {
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
