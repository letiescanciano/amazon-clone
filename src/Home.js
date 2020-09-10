import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          alt="home-banner"
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          <Product id="1" title="The Lean Startup" price="19.99" rating={4} />
          <Product id="2" title="Principles" price="12.99" rating={5} />
        </div>
        <div className="home__row">
          <Product id="3" title="The 5AM Club" price="14.99" rating={4} />
          <Product
            id="4"
            title="The Road Character"
            price="123.99"
            rating={5}
          />
          <Product id="5" title="Salud Salvaje" price="10.99" rating={5} />
        </div>
      </div>
    </div>
  );
}

export default Home;
