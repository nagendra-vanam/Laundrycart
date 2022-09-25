import react from "react";
import "./orderHeader.css";
import Profilepic from "../images/profilepic.png";
import { Link } from "react-router-dom";
import Dp from "../images/profilepic.jpg"

const OrderHeader = () => {
  const logout = (e)=>{
    console.log("hi....")
    localStorage.clear();
    // let a = 10 , b =2 ;
    // console.log(a*b);
  }
  return (
    // <div className="navbar">
    //   <div className="navleft">Laundary</div>
    //   <div className="navright">
    //     <div className="pricecareer">
    //       <div>Price</div>
    //       <div>career</div>
    //     </div>

    //     <div className="imagenusername">
    //       <div className="profileimagec">
    //         <img className="profileimage" src={Profilepic} alt="profilepic" />
    //       </div>
    //       <div>
    //         <h3 className="profileuser">User name</h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="header">
    <ui className="header-left"> <li className="header-nav"><b>LAUNDRY</b></li></ui>
    <ui className="header-right">
      <li className="light-text header-nav">pricing</li>
      <li className="light-text header-nav">career</li>
      <li className="header-nav li">
        <span><img src={Dp} alt="dp" /></span>
        {/* <select className="logout-option">
          <option>User Name</option>
          <option ><button onClick={logout}>Log Out</button></option>
        </select> */}
        <span>{localStorage.getItem("name")}</span> 
        <Link to={"/"}>
          <span className="logout">             
            <button onClick={logout}>Log Out</button>
          </span>
        </Link>        
      </li>
    </ui>
  </div>
  );
};
export default OrderHeader;
