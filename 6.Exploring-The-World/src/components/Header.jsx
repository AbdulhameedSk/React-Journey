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
          <button className="login">Login</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
