import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { Link } from 'react-router-dom';
import { CartContext } from '../Cart';

function Nav() {
    
    const [user] = useContext(UserContext);
    const totalItems = useContext(CartContext);
    console.log(user);
    console.log(totalItems);
    return (
        <div className="nav">
            <div className="logo">
                <span>TEY-eCommerce</span>
                
            </div>
            <div className="menu">
                <ul>
                    <Link to={`/home`}><li>Home</li></Link>
                    <li>Contact</li>
                    <Link to={`/cart`}><li>Cart ({totalItems})</li></Link>
                </ul>
            </div>
            <div> Hi, {user && user[0].user} !</div>
        </div>
    )
}

export default Nav
