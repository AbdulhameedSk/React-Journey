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
  return (
    <div className="card">
      <img src={props.link} alt={props.alt} />
      <h4>{props.resname}</h4>
      <p>{props.at}</p>
      {console.log(props.reach)}
      <ul>
        <li>{props.rating}</li>
        <li>{props.reach}</li>
        <li className="price">Price: ${props.price}.00</li>
      </ul>
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
          link={item.link}
          alt={item.alt}
          resname={item.resname}
          at={item.at}
          rating={item.rating}
          reach={item.reach}
          price={item.price}
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
              link: require(`./img/Biryani.jpg`),
              alt: "BIRYANI",
              resname: "BhaiPoint",
              at: "Halal", // This 'at' is not defined in the ItemList component
              rating: 4.3,
              reach: "20min",
              price: 100,
              id: 1,
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
