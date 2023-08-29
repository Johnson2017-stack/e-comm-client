import React from 'react'
import "./Home.css"
import Product from "./Product.js";
import ClutchLever from "./images/clutch-lever.jpg";
import ChromeAir from "./images/air-cleaner-chrome.jpg";
import Harleyair from "./images/air-cleaner-harley.jpg";
import KNAir from "./images/air-cleaner-K&N.jpg";
import BiHelmet from "./images/bi-color-helemt.jpg";
import BlackHelmet from "./images/black-helmet.jpg";
import V124 from "./images/v124-engine.jpg";
import GoldMirror from "./images/gold-over-chrome-mirror.jpg";
import HandBrake from "./images/hand-break-lever.jpg";
import MasterCylinder from "./images/master-cylinder.jpg";
import RedHelmet from "./images/red-helmet.jpg";
import RedLeftMirror from "./images/red-left-mirror.jpg";
import GasCap from "./images/replacement-gas-cap.jpg";
import UnerviseralMirror from "./images/universal-set-mirrors.jpg";
import V111 from "./images/v111-motor.jpg";
import Background from "./images/logo-background.png";


const Home = () => {
  return (
    <div className="home">
    <div className="home__container">
      <img
        className="home__image"
        src={Background}
        alt="sprockets"
      />

      <div className="home__row">
        <Product
          id="12321341"
          title="Chrome Clutch lever"
          price={50}
          quantity={3}
          rating={5}
          image={ClutchLever}
        />
        <Product
          id="49538094"
          title="Chrome Air Cleaner"
          price={250.99}
          quantity={3}
          rating={4}
          image={ChromeAir}
        />
      </div>

      <div className="home__row">
        <Product
          id="4903850"
          title="Air cleaner for harley"
          price={300.00}
          quantity={3}
          rating={3}
          image={Harleyair}
        />
        <Product
          id="23445930"
          title="K&N Air filter"
          price={98.99}
          quantity={3}
          rating={5}
          image={KNAir}
        />
        <Product
          id="3254354345"
          title="Bi colored helmet"
          price={598.99}
          quantity={3}
          rating={4}
          image={BiHelmet}
        />
        
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="v124 harley replica motor"
          price={199.99}
          quantity={3}
          rating={3}
          image={V124}
        />
        <Product
          id="23445930"
          title="Chrome mirror with gold inlay"
          price={98.99}
          quantity={3}
          rating={5}
          image={GoldMirror}
        />
        <Product
          id="3254354345"
          title="Chrome hand brake"
          price={598.99}
          quantity={3}
          rating={4}
          image={HandBrake}
        />
        
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="Chrome Master cylinder"
          price={199.99}
          quantity={3}
          rating={3}
          image={MasterCylinder}
        />
        <Product
          id="23445930"
          title="Red helmet"
          price={129.99}
          quantity={3}
          rating={5}
          image={RedHelmet}
        />
        <Product
          id="3254354345"
          title="Left mirror color Red"
          price={59.99}
          quantity={3}
          rating={4}
          image={RedLeftMirror}
        />
        
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="Chrome gas cap"
          price={45.55}
          quantity={3}
          rating={3}
          image={GasCap}
          
        />
        <Product
          id="23445930"
          title="Universal mirror set"
          price={109.99}
          quantity={3}
          rating={5}
          image={UnerviseralMirror}
        />
        <Product
          id="3254354345"
          title="V111 harley replica motor"
          price={699.99}
          quantity={3}
          rating={4}
          image={V111}
        />
        
      </div>

      <div className="home__row">
        <Product
          id="90829332"
          title="Black helmet"
          price={139.95}
          quantity={3}
          rating={4}
          image={BlackHelmet}
        />
      </div>
    </div>
  </div>
  );
};


export default Home