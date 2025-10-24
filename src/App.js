import React from "react";

function Header() {
  return (
    <header style={{padding: 16, textAlign: "center", background: "#ffe4b5", borderBottom: "2px solid #e3c78c"}}>
      <h1 style={{margin: 0}}>Trevor’s Pizza Co.</h1>
    </header>
  );
}

function Pizza({ name, ingredients, price, photoName }) {
  return (
    <div style={{border:"1px solid #ddd", borderRadius:12, padding:16, maxWidth:320}}>
      <img src={photoName} alt={name} style={{width:"100%", height:180, objectFit:"cover", borderRadius:8}} />
      <h3 style={{margin:"12px 0 6px"}}>{name}</h3>
      <p style={{margin:"0 0 10px", color:"#555"}}>{ingredients}</p>
      <p style={{fontWeight:700}}>${price}</p>
    </div>
  );
}

const pizzas = [
  { name: "Margherita", ingredients: "Tomato, Mozzarella, Basil", price: 12, photoName: "/pizzas/margherita.jpg" },
  { name: "Prosciutto",  ingredients: "Tomato, Dry-cured ham, Basil", price: 17, photoName: "/pizzas/prosciutto.jpg" },
  { name: "Salamino",     ingredients: "Salami, Mozzarella, Herbs", price: 13, photoName: "/pizzas/salamino.jpg" },
  { name: "Focaccia",   ingredients: "Garlic, Thyme, Olives", price: 15, photoName: "/pizzas/focaccia.jpg" },
  { name: "Funghi",     ingredients: "Tomato, Onion, Parmesan", price: 12, photoName: "/pizzas/funghi.jpg" },
  { name: "Spinaci",     ingredients: "Spinich, Parmesan, Olives", price: 16, photoName: "/pizzas/spinaci.jpg" }
];

function App() {
  return (
    <div style={{background:"#faf8f5", minHeight:"100vh"}}>
      <Header />
      <main style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:16, padding:20}}>
        {pizzas.map(p => <Pizza key={p.name} {...p} />)}
      </main>
    </div>
  );
}

export default App;
