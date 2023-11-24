/** @format */
import "./Styles/App.css";
import Navbar from "./Components/Navbar.js";
import ShopList from "./Components/ShopList";
import Cart from "./Components/Cart.js";
import "./Styles/ShopList.css";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  function handleClick(item) {
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
  }

  function handleShow() {
    setShow((show) => !show);
  }

  function handleChange(item, d) {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const temperaryCart = cart;
    temperaryCart[ind].amount += d;

    if (temperaryCart[ind].amount === 0) temperaryCart[ind].amount = 1;

    setCart([...temperaryCart]);
  }

  return (
    <div className="App">
      <Navbar size={cart.length} onHandleShow={handleShow} />
      {show ? (
        <ShopList handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} onHandleChange={handleChange} />
      )}
      {warning && <div className="warning"> Your Product is Already Added</div>}
    </div>
  );
}
