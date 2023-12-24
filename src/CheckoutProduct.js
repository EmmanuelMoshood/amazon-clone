import React from "react";
import "./CheckoutProduct.css";
import { UseBasketContext } from "./Context";

function CheckoutProduct({ product }) {
  const { basket, setBasket } = UseBasketContext();

  function removeFromCart() {
    //find index of item to remove
    const index = basket.findIndex(
      (basketItem) => basketItem._id === product._id
    );
    //get current content of basket
    let newBasket = [...basket];
    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn(`can't remove product ${product.id}`);
    }

    return setBasket([...newBasket]);
  }

  return (
    <div className="checkoutProduct">
      <img
        src={product.image}
        alt="checkoutProductImage"
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{product.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(product.rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
