/** @format */
import "./Styles/App.css";
import Navbar from "./Components/Navbar.js";
import ShopList from "./Components/ShopList";
import Cart from "./Components/Cart.js";
import "./Styles/ShopList.css";
import { useState } from "react";

export default function App() {
  // const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;

    cart &&
      cart.forEach((product) => {
        if (item.id === product.id) isPresent = true;
      });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <Navbar size={cart.length} />
      <ShopList handleClick={handleClick} />
      <Cart />
      {warning && <div className="warning"> Your Product is Already Added</div>}
    </div>
  );
}
