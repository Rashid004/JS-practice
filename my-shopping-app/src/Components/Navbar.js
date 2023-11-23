/** @format */

import React from "react";
import "../Styles/Navbar.css";

function Navbar({ size }) {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">my Shopping</span>

        <div className="cart">
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
