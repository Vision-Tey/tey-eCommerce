import React from 'react'
import Card from '../Components/Card'
import {items} from '../Library/stock'



function Home() {
    return (
        <>
        <div className="heading"><h2>Electronics</h2></div>
        <div className="home">
            {
    items.filter(stock => stock.category === "Electronics")
    .map(stock => (<Card img = {stock.image} price = {stock.price} key = {stock.id}/>        
       
    ))}
    </div>
    <div className="heading"><h2>Garmets</h2></div>
    <div className="home">
            {
    items.filter(stock => stock.category === "Garmets")
    .map(stock => (<Card img = {stock.image} price = {stock.price} key = {stock.id}/>        
       
    ))}
    </div>
    <div className="heading"><h2>Grocery</h2></div>
    <div className="home">
            {
    items.filter(stock => stock.category === "Grocery")
    .map(stock => (<Card img = {stock.image} price = {stock.price} key = {stock.id}/>        
       
    ))}
    </div>
    <div className="heading"><h2>Phones</h2></div>
    <div className="home">
            {
    items.filter(stock => stock.category === "Phones")
    .map(stock => (<Card img = {stock.image} price = {stock.price} key = {stock.id}/>        
       
    ))}
    </div>
    <div className="heading"><h2>Shoes</h2></div>
    <div className="home">
            {
    items.filter(stock => stock.category === "Shoes")
    .map(stock => (<Card img = {stock.image} price = {stock.price} key = {stock.id}/>        
       
    ))}
    </div>
    </>
    )
}

export default Home
