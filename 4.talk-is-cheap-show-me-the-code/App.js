import React from "react";
import ReactDOM from "react-dom";
import myImage from "./img/CraveCraft.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={myImage} alt="LOGO" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Support</li>
          <li>Cart</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

const Card = (props) => {
  const link = require(`./img/Biryani.jpg`);

  return (
    <div className="card">
      <img src={props.link} alt={props.alt} />
      <h1>{props.name}</h1>
      <p className="price">Price: ${props.price}.00</p>
      <button onClick={() => alert("Item added to cart!")}>Add To Cart</button>
    </div>
  );
};

const ItemList = (props) => {
  return (
    <div
      className="item-list"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      {props.items.map((item) => (
        <Card
          name={item.name}
          price={item.price}
          link={item.link}
          alt={item.alt}
          key={item.id}
        />
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"> SEARCH </div>
      <div className="res-card">
        <ItemList
          items={[
            {
              id: 1,
              name: "Biryani",
              price: 100,
              link : require(`./img/Biryani.jpg`),
              alt: "BIRYANI",
            },
          ]}
        />
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const App = () => {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* body */}
      <Body />
      {/* footer */}
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
