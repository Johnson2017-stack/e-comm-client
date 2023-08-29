import React  from 'react';
import "./styles/Payment.css"
// import axios from 'axios';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import {Link} from 'react-router-dom';
import Checkout from './Checkout';

const Payment = () => {
    const[{ basket }, dispatch] = useStateValue();

    // const [Name, setName] = useState("");
    // const [Address, setAddress] = useState("");
    // const [Phone, setPhone] = useState("");


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    // axios.post()

  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>Checkout (<Link path="/checkout" element={<Checkout/>}>{basket?.length} items</Link>)</h1>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>Valued Customer</p>
                    <p>1234 johnsonMortorSports LANE</p>
                    <p>Denver, Co</p>
                    {/* <form>
                        <input placeholder="Your Name here" type="text" name="Name" onChange={e => setName(e.target.value)}></input>
                        <input placeholder='Your Address' type="text" name="Address" onChange={e => setAddress(e.target.value)}></input>
                        <input placeholder='Your Phone Number' type="text" name="Phone" onChange={e => setPhone(e.target.value)}></input>
                        <button>submit</button>
                        
                    </form> */}
                </div>
            </div>
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Review items and delivery</h3>
            </div>
            <div className='payment_items'>
                {basket.map(item => (
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
        <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Payment