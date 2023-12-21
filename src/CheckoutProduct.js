import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ product }) {
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
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
