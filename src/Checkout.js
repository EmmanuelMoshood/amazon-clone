import React from "react";
import "./Checkout.css";
import Header from "./Header";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  return (
    <div>
      <Header />

      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className="checkout__ad"
          />
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <CheckoutProduct
            id="123451"
            title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset 128 GB"
            price={689.96}
            rating={3}
            image="https://m.media-amazon.com/images/I/61GhF+JUXGL._AC_SX342_SY445_.jpg"
          />
        </div>
        <div className="checkout__right"></div>
      </div>
    </div>
  );
}

export default Checkout;
