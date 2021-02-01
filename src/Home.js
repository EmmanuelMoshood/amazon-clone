import React from "react";
import "./Home.css";
import Product from "./Product";
import Header from "./Header";
import products from "./data";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            src="https://m.media-amazon.com/images/I/71XNpZbNWNL._SX3000_.jpg"
            alt=""
            className="home__image"
          />
          <div className="products__container">
            <div className="products__wrapper">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
