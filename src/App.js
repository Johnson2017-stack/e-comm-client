import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";




const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <><Header /><Home /></>}/>
        <Route path="/checkout" element= {<><Header /><Checkout/></> } />
        <Route path="/payment" element={<><Header /><Payment/></>} />
      </Routes>
    </div>
  );
}

export default App;
