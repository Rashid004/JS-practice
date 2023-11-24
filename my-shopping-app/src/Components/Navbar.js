/** @format */

import React from "react";
import "../Styles/Navbar.css";

function Navbar({ size, onHandleShow }) {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={onHandleShow}>
          my Shopping
        </span>

        <div className="cart" onClick={onHandleShow}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span className="cart-number">{size}</span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
