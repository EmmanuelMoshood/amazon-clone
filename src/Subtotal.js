import React from "react";
import "./Subtotal.css";
import { UseBasketContext } from "./Context";

function Subtotal() {
  const { basket } = UseBasketContext();

  function getBasketTotal(basket) {
    return basket?.reduce((amount, item) => item.price + amount, 0);
  }

  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal ({basket.length} items): <strong>${getBasketTotal}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      </>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
