import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const pizzaData = [
  ///// dummy data ....
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "50px",
  //   textTransform: "uppercase",
  //   backgroundColor: "blue",
  // };
  // return <h1 style={style}>Fast React Pizza Co.</h1>;
  return (
    <header>
      <h1 className="app-title">Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  const numPizzas = pizzas.length; /// 0

  return (
    <main className="menu">
      <h2>Our menu </h2>

      {numPizzas > 0 ? (
        // react fragment :::
        <>
          <p style={{ textAlign: "center" }}>
            Authentic Italien cuisine . 6 creative dishes to choose from . All
            from our stone oven , all organic , all delicious ...
          </p>

          <div className="pizza-container">
            {pizzas.map((ele) => {
              return <Pizza pizzaObj={ele} key={ele.ingredients} />;
            })}
          </div>
        </>
      ) : (
        <p style={{ fontSize: "60px", textAlign: "center", fontWeight: "700" }}>
          We're still working on our menu . Please come back later ....
        </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  ///// destructring
  // if (pizzaObj.soldOut) return; ///// condinoal rendering eartly return ;
  return (
    <div className={`pizza-card ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name} </h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        {/* {pizzaObj.soldOut ? (
          <span> SOLD OUT </span>
        ) : (
          <span> {pizzaObj.price}</span>
        )} */}
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours(); //// 20

  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen);

  return (
    <footer>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
          ...
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div>
      <p>
        We're open from {openHour}:00 to {closeHour}:00 , Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
