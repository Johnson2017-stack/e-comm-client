import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Login from "./components/Login"


const App = () => {
  return (
    <div className="App">
      <Routes>
       <Route path="/api/login" element={<Login/>} />
        <Route path="/" element={ <><Header /><Home /></>}/>
        
        </Routes>
    </div>
  );
}

export default App;
