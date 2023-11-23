/** @format */
import React from "react";
import "../Styles/ShopList.css";
import list from "../data";
import Cards from "./Cards";

function ShopList({ handleClick }) {
  return (
    <section>
      {list.map((item) => (
        <Cards item={item} handleClick={handleClick} key={item.id} />
      ))}
    </section>
  );
}

export default ShopList;
