import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';


const App = () => {
  return (
    <div className="App">
      <Routes>
       
        <Route path="/" element={ <><Header /><Home /></>}/>
        
        </Routes>
    </div>
  );
}

export default App;
