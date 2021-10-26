
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

import Home from './Page/Home';
import Login from './Page/Login';
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Admin from './Page/Admin';
import Product_details from './Page/Product_details';

import { UserProvider } from './Components/UserContext';



function App() {

  return (
    <UserProvider>
    <div className="App">
        
      <Router>

      <Nav/>
      <Switch>
       
        <Route exact path = "/" component = {Login}/>
        
        <Route exact path = "/home" component = {Home}/>
        <Route exact path = "/admin" component = {Admin}/>
        <Route exact path = "/product/:id" component = {Product_details}/>
        
      </Switch>
        <Footer/>
      </Router> 
    </div>
    </UserProvider>
  );
}

export default App;
