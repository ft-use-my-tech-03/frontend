import React from 'react'
import "./card.css"

const Card = (item) => {
    return (
        <div className="card-section">
            <div className="image-sec">
                <img src={item.item.image_url} alt="..." style={{width: "200px", height: "200px"}}/>
            </div>
            <div className="body">
                <h3>{item.item.item_name}</h3>
                <p>{item.item.item_category}</p>
                <p>{item.item.item_description}</p>
                <div>
                    <p>Quantity Available {item.item.item_quantity}</p>
                    <button style={{marginLeft: 0}}>${item.item.price} Rental Cost</button>
                </div>
            </div>
        </div>
    )
}


export default Card