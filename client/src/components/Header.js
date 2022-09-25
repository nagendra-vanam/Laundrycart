import React from "react";
import "./Header.css";

const Header2 = () => {
  return (
    <div className="navbar">
      <div className="navbarleft">
        <h2 className="heading1">LAUNDRY</h2>
      </div>
      <div className="navbarright">
        <h4>Home</h4>
        <h4>Pricing</h4>
        <h4>Career</h4>
      </div>
      <h4 className="navbutton1">Sign Up</h4>
    </div>
  );
};

export default Header2;
