import React from 'react'
import { useHistory } from 'react-router'

function Table( {items} ) {
    console.log(items);
    const history = useHistory();
    function productIDHandle(id){
        history.push(`/product/${id}`)
    }

    return (
        <div>
            {items ? (
        <table>
          <thead>
            <tr>
              <th>Pdt_id</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody className="table_body">
            {items.map((stock) => (
             

            <tr key={stock.id} onClick={()=>productIDHandle(stock.id) } >
           
                <td>{stock.id}</td>
                <td>{stock.product}</td>
                <td>{stock.quantity}</td>
                <td>{stock.amount}</td>
                <td>{stock.user.name}</td>
               
            </tr>
            
             
            ))}
          </tbody>
            </table>
       ) : (
        "loading..."
      )}
        </div>
    )
}

export default Table
