import myImage from "./img/CraveCraft.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btn, setbtn] = useState("Login");
  const toggle = () => {
    if (btn === "Login") {
      setbtn("Logout");
    } else {
      setbtn("Login");
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={myImage} alt="LOGO" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/contactus"}>Contact Us</Link></li>
          <li>Cart</li>
          <button className="login" onClick={toggle} style={{ width: "80px" }}>
            {btn}
          </button>{" "}
        </ul>
      </div>
    </div>
  );
};

export default Header;
