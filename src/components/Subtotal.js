import React from "react";
import "./styles/Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { NumberFormatBase } from "react-number-format";
import { Link } from "react-router-dom";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
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

      <Link to="/payment">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Subtotal;
