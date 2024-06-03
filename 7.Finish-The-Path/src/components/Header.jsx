import myImage from "./img/CraveCraft.png";
import { useState } from "react";
const Header = () => {
  const [btn,setbtn]=useState("Login")
  const toggle=()=>{
    if(btn==="Login"){
      setbtn("Logout")
    }
    else{
      setbtn("Login")
    }
  }

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
          <button className="login" onClick={toggle}>{btn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
