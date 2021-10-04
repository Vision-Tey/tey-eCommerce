import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <div className="card_image">
                <img src={props.img} alt="pdt" />
            </div>
            <div className="card_description">
                <span>Shs: {props.price}</span>
            </div>
            <button>Buy</button>
        </div>
    )
}

export default Card
