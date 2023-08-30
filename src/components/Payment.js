import React, { useEffect, useState } from "react";
import "./styles/Payment.css";
import axios from "axios";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import { getBasketTotal } from "./reducer";
import { NumberFormatBase } from "react-number-format";

const Payment = () => {
  const [{ basket }, dispatch] = useStateValue();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cv, setCv] = useState("");

  const handleSubmit = (e) => {
    console.log(e);
    alert(
      "Thank you for your order, your order has been recieved and will be packaged soon!!"
    );
  };

  axios.post("https://e-comm-server-w0d8.onrender.com/api/payment", {
    name: name,
    address: address,
    phone: phone,
    cardNumber: cardNumber,
    expirationDate: expirationDate,
    cv: cv,
  });

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (
          <Link path="/checkout" element={<Checkout />}>
            {basket?.length} items
          </Link>
          )
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <form>
              <input
                placeholder="Your Name here"
                type="text"
                name="Name"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                placeholder="Your Address"
                type="text"
                name="Address"
                onChange={(e) => setAddress(e.target.value)}
              ></input>
              <input
                placeholder="Your Phone Number"
                type="text"
                name="Phone"
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </form>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form>
              <input
                placeholder="Your Card Number"
                type="text"
                name="cardNumber"
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <input
                placeholder="Expiration Date"
                type="text"
                name="expirationDate"
                onChange={(e) => setExpirationDate(e.target.value)}
              />
              <input
                placeholder="The CV Number"
                type="text"
                name="cv"
                onChange={(e) => setCv(e.target.value)}
              />
              <div className="payment_priceContainer">
                <NumberFormatBase
                  renderText={(formattedValue) => (
                    <>
                      <p>
                        Subtotal ({basket.length} items):{" "}
                        <strong>${formattedValue}</strong>
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <Link to="/">
                  <button onClick={handleSubmit} type="submit">
                    Buy Now
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
