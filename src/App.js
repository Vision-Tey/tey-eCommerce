
import './App.css';
import {BrowserRouter as Router,Route,} from "react-router-dom";

import Home from './Page/Home';
import Login from './Page/Login';
import Nav from './Components/Nav'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
        <Nav/>
      <Router>
        <Route exact path = "/" component = {Login}/>
        <Route exact path = "/home" component = {Home}/>
      </Router>
     
      <Footer/>
    </div>
  );
}

export default App;
