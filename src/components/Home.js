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
import V111 from "./images/v111-motor.jpg"


const Home = () => {
  return (
    <div className="home">
    <div className="home__container">
      <img
        className="home__image"
        src={ClutchLever}
        alt=""
      />

      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image={ClutchLever}
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image={ChromeAir}
        />
      </div>

      <div className="home__row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image={Harleyair}
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image={KNAir}
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image={BiHelmet}
        />
        
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image={V124}
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image={GoldMirror}
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image={HandBrake}
        />
        
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image={MasterCylinder}
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image={RedHelmet}
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image={RedLeftMirror}
        />
        
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image={GasCap}
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image={UnerviseralMirror}
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image={V111}
        />
        
      </div>

      <div className="home__row">
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image={BlackHelmet}
        />
      </div>
    </div>
  </div>
  );
};


export default Home