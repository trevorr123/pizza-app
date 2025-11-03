import React from "react";
import './index.css';

function App() {
  return (
    <div className="Container">
      <Header />
      <Menu />
      <Footer />
      
    </div>
  );
}
function Header() {
  return (
    <header style={{fontSize: "48px", color: 'orange' , textTransform: "uppercase", padding: 16, textAlign: "center", background: "#ffe4b5", borderBottom: "2px solid #e3c78c"}}>
      <h1 style={{margin: 0}}>Trevor’s Pizza Co.</h1>
    </header> 
  );
}

function Pizza() {
  return (
    <div className="pizza">
      <img src="pizzas/funghi.jpg" alt="Pizza" />
      <h2>Funghi</h2>
      <p>Ingredients: Tomato, Cheese, Onion, Mushroom</p>
      <span>$10</span>

      <img src="pizzas/margherita.jpg" alt="pizzas" />
      <h2>Margherita</h2>
      <p>Ingredients: Tomato, Cheese</p>
      <span>$12</span>

      <img src="pizzas/spinaci.jpg" alt="Pizza" />
      <h2>Spinaci</h2>
      <p>Ingredients: Tomato, Cheese, Spinach</p>
      <span>$9</span>
    </div>
  );
}

// const pizza = [
//   { name: "Margherita", ingredients: "Tomato, Mozzarella, Basil", price: 12, photoName: "/pizzas/margherita.jpg" },
//   { name: "Prosciutto",  ingredients: "Tomato, Dry-cured ham, Basil", price: 17, photoName: "/pizzas/prosciutto.jpg" },
//   { name: "Salamino",     ingredients: "Salami, Mozzarella, Herbs", price: 13, photoName: "/pizzas/salamino.jpg" },
//   { name: "Focaccia",   ingredients: "Garlic, Thyme, Olives", price: 15, photoName: "/pizzas/focaccia.jpg" },
//   { name: "Funghi",     ingredients: "Tomato, Onion, Parmesan", price: 12, photoName: "/pizzas/funghi.jpg" },
//   { name: "Spinaci",     ingredients: "Spinich, Parmesan, Olives", price: 16, photoName: "/pizzas/spinaci.jpg" }
// ];

function Menu() {
  return(
    <>
    <h2>Our Menu</h2>
    <Pizza /> 
    </>
    
  ); 
}


function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      <p>{isOpen ? "We’re currently open!" : "Sorry, we’re closed."}</p>
    </footer>
  );
}

export default App;