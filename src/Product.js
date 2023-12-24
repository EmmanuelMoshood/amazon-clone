import React from "react";
import "./Product.css";
import { UseBasketContext } from "./Context";

function Product({ product }) {
  const { basket, setBasket } = UseBasketContext();

  function addToCart() {
    setBasket([...basket, product]);
    console.log(basket);
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{product.title}</p>
        <p className="product__price">
          <strong>{product.price}</strong>
        </p>
        <div className="product__rating">
          {Array(product.rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={product.image} alt="productimage" className="product__image" />

      <button onClick={addToCart}>Add to Basket</button>
    </div>
  );
}

export default Product;
