import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/611hLHyoRJL._SX3000_.jpg"
          alt="Spring Deals on Amazon"
        />

        <div className="home__row">
          <Product
          title="Rayban"
          price={199.99}
          image="https://m.media-amazon.com/images/I/51+TKek67sL._AC_UX695_.jpg" 
          rating={3}/>
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
