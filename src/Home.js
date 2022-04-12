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
          id="1123"
          title="Ray_Ban New Wayfarer Sunglasses (Matte Black Frame 55mm), Matte Black Frame Solid Black G15 Lens, 55 mm"
          price={199.99}
          image="https://m.media-amazon.com/images/I/51+TKek67sL._AC_UX695_.jpg" 
          rating={4}/>
          <Product
          id="1232"
          title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
          rating={5}
          price={11.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg" />
        </div>

        <div className="home__row">
          <Product
          id="1123"
          title="Ray_Ban New Wayfarer Sunglasses (Matte Black Frame 55mm), Matte Black Frame Solid Black G15 Lens, 55 mm"
          price={199.99}
          image="https://m.media-amazon.com/images/I/51+TKek67sL._AC_UX695_.jpg" 
          rating={4}/>
          <Product
          id="1232"
          title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
          rating={5}
          price={11.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg" /> 
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
