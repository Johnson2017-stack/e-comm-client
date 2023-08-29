import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import  { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51NkYniKc2t9beDQBoZqloJUVZXZiag8pnVKB6bnXh5Qh09kObJJwZManyl4BZSBdUSp2gGp36yevcSXzLdhLiftT00EuJwUSfs");


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <><Header /><Home /></>}/>
        <Route path="/checkout" element= {<><Header /><Checkout/></> } />
        <Route path="/payment" element={<><Header /><Elements stripe={promise}><Payment/></Elements></>} />
      </Routes>
    </div>
  );
}

export default App;
