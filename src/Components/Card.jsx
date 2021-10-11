import React from 'react'
import { useHistory} from 'react-router-dom'
import { items } from '../Library/stock';



function Card(props) {

    const history = useHistory();
function handleHistory(){
    history.push(`/product/${props.id}`);
}
  
    return (
        <div className="card">
          
            <div className="card_image">
                <img src={props.img} alt="pdt" />
            </div>
            <div className="card_description">
                <span>Shs: {props.price}</span>
            </div>
            <button onClick = {handleHistory}>Buy</button>
            

        </div>
    )
}

export default Card
