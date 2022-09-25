import React from "react";
import "./footer.css";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import linkedin from "./images/linkedin.svg";
const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <p className="aboutus">About US</p>
        <p className="f2">Doorstep Wash & Dryclean Service</p>
      </div>
      <div>
        <p className="f1">Home</p>
        <p className="f2">Sign In</p>
        <p className="f2">Register</p>
      </div>
      <div>
        <p className="f1">Pricing</p>
      </div>
      <div>
        <p className="f1">career</p>
        <p className="f2">Blogs</p>
        <p className="f2">Create</p>
      </div>
      <div>
        <p className="f1">Contact</p>
      </div>
      <div>
        <p className="social">Social Media</p>
        <div className="media">
          <img src={facebook} />
          <img src={instagram} />
          <img src={linkedin} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
