import React from "react";
import "./Product.css";

function Product({ product }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{product.title}</p>
        <p className="product__price">
          <small>$</small>
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

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
