import React from 'react'
import { useParams } from 'react-router-dom'
import {items} from '../Library/stock'


function Product_details() {
    const {id} = useParams();
   console.log(typeof id);
    return (
         <>
        
        {
        items.filter((stock)=>  stock.id === id)
        .map(stock => (
        <div className= "Details">
            <h2>{stock.product}</h2>
            <div className="max-width">
                <div className="content image">
                    <img src={stock.image} alt="" />
                </div>
                <div className="content right">
                    <div className="cat">{stock.category}</div>
                    <div className="price">{stock.price}</div>
                    <button className="Cart">Add to Cart</button>
                </div>
            </div>
        </div>
        ))}
        </>
    )
}

export default Product_details
