import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function Nav() {
    
    const [user] = useContext(UserContext);
    // console.log(user[0].user);
    return (
        <div className="nav">
            <div className="logo">
                <span>TEY-eCommerce</span>
                
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            <div>{user && user[0].user}</div>
        </div>
    )
}

export default Nav
