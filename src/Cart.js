import React, { createContext } from 'react'
import { useCart } from "react-use-cart";



export const CartContext = createContext();

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    
    if (isEmpty) return <h1 className="text-center">Your cart is Empty</h1>
    return (
        <>
        <CartContext.Provider value={totalUniqueItems}>
      
        </CartContext.Provider>
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) totalItems:({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                        {items.map((stock, index) => {
                            return (
                            <tr key={index}>
                                <td>
                                    <img src={stock.image} style={{height: '6rem'}} alt="" />
                                </td>
                                <td>{stock.product}</td>
                                <td>{stock.price}</td>
                                <td>Quantity ({stock.quantity})</td>
                                <td>
                                    <button 
                                    className="btn btn-info ms-2"
                                    onClick={() => updateItemQuantity(stock.id, stock.quantity - 1 )}
                                    >-</button>
                                    <button 
                                    className="btn btn-info ms-2"
                                    onClick={() => updateItemQuantity(stock.id, stock.quantity + 1 )}
                                    >+</button>
                                    <button 
                                    className="btn btn-danger ms-2"
                                    onClick={() => removeItem(stock.id)}
                                    >Remove Item</button>
                                </td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total Price: UGX {cartTotal}</h2>
                </div>
                <div className="col-auto">
                    <button 
                    className="btn btn-danger m-2"
                    onClick={ ()=> emptyCart()}
                    >Clear Cart</button>
                    <button className="btn btn-primary m-2">Buy now</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Cart
