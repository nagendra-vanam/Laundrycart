import React from "react";
import home from "../images/home.svg";
import list from "../images/list.svg";
import more from "../images/more.svg";

import "./verticalnav.css";

const Verticalnav = () => {
  return (
    <div className="vnav">
      <span>
        <img className="vnavicon" src={home} alt="profilepic" />
      </span>
      <span>
        <img className="vnavicon" src={more} alt="profilepic" />
      </span>
      <span className="vnaviconlist">
        <img className="vnavicon" src={list} alt="profilepic" />
      </span>
    </div>
    // <div className="sidebar">
    //     <ui className="sidebar-ui">
    //       <li className="icons home"><img src={home} alt="dp" /></li>
    //       <li className="icons more"><img src={more} alt="dp" /></li>
    //       <li className="icons list"><img src={list} alt="dp" /></li>
    //     </ui>
    // </div> 
  );
};

export default Verticalnav;
