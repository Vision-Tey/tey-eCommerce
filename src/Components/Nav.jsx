import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { Link } from 'react-router-dom';
import { CartContext } from '../Cart';

function Nav() {
    
    const [user] = useContext(UserContext);
    const total = useContext(CartContext);
    console.log(total);
    return (
        <div className="nav">
            <div className="logo">
                <span>TEY-eCommerce</span>
                
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <Link to={`/cart`}><li>Cart ({total})</li></Link>
                </ul>
            </div>
            <div>{user && user[0].user}</div>
        </div>
    )
}

export default Nav
