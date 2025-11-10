import React, { useState } from "react";
import './index.css';

const pizzaData = [
  { name: "Margherita", ingredients: "Tomato, Mozzarella, Basil", price: 12, photoName: "/pizzas/margherita.jpg", soldOut: true},
  { name: "Prosciutto",  ingredients: "Tomato, Dry-cured ham, Basil", price: 17, photoName: "/pizzas/prosciutto.jpg", soldOut: false},
  { name: "Salamino",     ingredients: "Salami, Mozzarella, Herbs", price: 13, photoName: "/pizzas/salamino.jpg", soldOut: false},
  { name: "Focaccia",   ingredients: "Garlic, Thyme, Olives", price: 15, photoName: "/pizzas/focaccia.jpg", soldOut: true},
  { name: "Funghi",     ingredients: "Tomato, Onion, Parmesan", price: 12, photoName: "/pizzas/funghi.jpg", soldOut: true},
  { name: "Spinaci",     ingredients: "Spinich, Parmesan, Olives", price: 16, photoName: "/pizzas/spinaci.jpg", soldOut: true},
  { name: "Quattro Formaggi", ingredients: "Tomato, Mozzarella, Parmesan, Gorgonzola, Goat Cheese", price: 18, photoName: "/pizzas/quattroformaggi.jpeg", soldOut: false},
  { name: "Capricciosa", ingredients: "Tomato, Mozzarella, Artichoke, Ham, Mushroom", price: 14, photoName: "/pizzas/capricciosa.jpeg", soldOut: true},
  { name: "Diavola", ingredients: "Tomato, Mozzarella, Spicy Salami", price: 17, photoName: "/pizzas/diavola.jpeg", soldOut: true},
  { name: "Hawaiian", ingredients: "Tomato, Mozzarella, Ham, Pineapple", price: 16, photoName: "/pizzas/hawaiian.jpeg", soldOut: false},
];

function App() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <div className="Container">
      <Header isOpen={isOpen} />
      <Menu />
      <Footer isOpen={isOpen} openHour={openHour} closeHour={closeHour} />
    </div>
  );
}

function Header({ isOpen }) {
  return (
    <header
      role="banner"
      style={{
        padding: 16,
        textAlign: "center",
        borderBottom: "2px solid #e3c78c",
      }}
    >
      <h1 style={{ margin: 0, fontSize: 48, color: "orange", textTransform: "uppercase" }}>
        Trevor’s Pizza Co.
      </h1>
      {isOpen && (
        <p style={{ marginTop: 6, fontWeight: 600, fontSize: 20 }}>
          Authentic Italian Cuisine, Daily Fresh Ingredients
        </p>
      )}
    </header>
  );
}

function Pizza({ name, ingredients, price, photoName }) {
  return (
    <article
      role="listitem"
      className="pizza-card"
      style={{
        border: "1px solid",
        borderRadius: 8,
        padding: 12,
      }}
    >
      <img
        src={photoName}
        alt={`${name} pizza`}
        style={{ width: "100%", height: 170, objectFit: "cover", borderRadius: 6, marginBottom: 8 }}
      />
      <h3 style={{ margin: "6px 0" }}>{name}</h3>
      <p style={{ margin: "6px 0", color: "#555" }}>{ingredients}</p>
      <strong style={{ display: "inline-block", marginTop: 8 }}>${price}</strong>
    </article>
  );
}

function Menu() {
  const [search, setSearch] = useState("");

  const filteredPizzas = pizzaData.filter(
    (pizza) =>
      pizza.name.toLowerCase().includes(search.toLowerCase()) ||
      pizza.ingredients.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Our Menu</h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search for a pizza or ingredient"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "400px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",

          gap: "16px",
        }}
      >
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza) => <Pizza key={pizza.name} {...pizza} />)
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>
            No pizzas match your search.
          </p>
        )}
      </div>
    </main>
  );
}




function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      <p>{isOpen ? "We’re currently open!" : "Sorry, we’re closed."}</p>
      <button
            style={{
              padding: "12px 24px",
              fontSize: "14px",
              backgroundColor: "orange",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ff9c33")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "orange")}
          >
            Order Now 
          </button>
    </footer>
  );
}

export default App;