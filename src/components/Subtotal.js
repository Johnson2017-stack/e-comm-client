import React from 'react';
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';


const Subtotal = () => {
  
    const [{ basket }, dispatch] = useStateValue();

    function currencyFormat(num) {
        return '$' + num.toFixed(2) 
     } 

  return (
    <div className='subtotal'>
        <div className='currencyFormat'>
        {(value) => (
          <>
            <p>
              Subtotal ({basket.length}items ): <strong>{value}</strong>
            </p>
          </>
        )}
        value={getBasketTotal(basket).tofixed(2)} 
      </div>
      

<button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal