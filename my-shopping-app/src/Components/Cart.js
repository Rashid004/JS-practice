/** @format */
import { useState } from "react";
import { useEffect } from "react";
import "../Styles/Cart.css";

function Cart({ cart, setCart, onHandleChange }) {
  const [price, setPrice] = useState(0);

  function handlePrice() {
    let initialPrice = 0;
    cart.map((item) => (initialPrice += item.amount * item.price));
    setPrice(initialPrice);
  }

  function handleRemove(id) {
    const removeProduct = cart.filter((item) => item.id !== id);
    setCart(removeProduct);
  }

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => onHandleChange(item, -1)}> - </button>
            <button>{item.amount}</button>
            <button onClick={() => onHandleChange(item, +1)}> + </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total</span>
        <span>${Math.round(price)}</span>
      </div>
    </article>
  );
}

export default Cart;
