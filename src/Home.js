import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://m.media-amazon.com/images/I/71XNpZbNWNL._SX3000_.jpg"
            alt=""
            className="home__image"
          />

          <div className="home__row">
            <Product
              id="123451"
              title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset 128 GB"
              price={689.96}
              rating={3}
              image="https://m.media-amazon.com/images/I/61GhF+JUXGL._AC_SX342_SY445_.jpg"
            />
            <Product
              id="123455"
              title="Rubik's Cube, The Original 3x3 Cube"
              price={8.93}
              rating={2}
              image="https://m.media-amazon.com/images/I/713kDGGADWL._AC_SL1500_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="123452"
              title="Hermes Eau Intense Vetiver Eau De Parfum 3.Oz/ 100 Ml - Spray for Men By 1.01 Pounds"
              price={186.18}
              rating={4}
              image="https://m.media-amazon.com/images/I/71iuCouRtaL._AC_SL1500_.jpg"
            />
            <Product
              id="123453"
              title="Vertical Mouse 2.4G Wireless"
              price={24.93}
              rating={3}
              image="https://m.media-amazon.com/images/I/41SqIR1Z1xL._AC_SY240_.jpg"
            />
            <Product
              id="123454"
              title="Star Wars Grogu Plush Toy"
              price={20.58}
              rating={3}
              image="https://m.media-amazon.com/images/I/71X2u76uX3L._AC_SL1500_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="123456"
              title="Jo Malone 154 for Women Cologne Spray, 3.4 Ounce, 0690251004621"
              price={271.36}
              rating={5}
              image="https://m.media-amazon.com/images/I/71uMFBa4ihL._AC_SL1500_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
