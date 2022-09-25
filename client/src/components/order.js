import React from "react";
import OrderFooter from "./orderfooter";
import "./orderfooter.css";
import OrderHeader from "./orderHeader";
import "./order.css";
import Verticalnav from "./verticalnav";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <>
      <OrderHeader />
      <div className="ordergridContainer">
        <div className="verticalnav">
          <Verticalnav />
        </div>
        <div className="ordercomponent">
          <button className="button">
            <Link className="linkstyle" to="/order/create">
              {" "}
              create
            </Link>
          </button>
        </div>
      </div>
      <OrderFooter />
    </>
  );
};

export default Order;
