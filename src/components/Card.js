import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'
  import { BrowserRouter, Route, Switch } from "react-router-dom";

const Card = (item) => {
    return (
        <div className="card-section">
            <div className="image-sec">
             <Link to={`/details/${item.item.item_id}`}>
                <img src={item.item.image_url} alt="..." style={{width: "200px", height: "200px"}}/>
                </Link>
            </div>
            <div className="body">
            <Link to={`/details/${item.item.item_id}`}> <h3 style={{color: "white"}}>{item.item.item_name}</h3> </Link>
                <p>{item.item.item_category}</p>
                <p>{item.item.item_description}</p>
                <div>
                    <p class="quant">Quantity Available {item.item.item_quantity}</p>
                    <button style={{marginLeft: 0}}>${item.item.price} Rental Cost</button>
                </div>
            </div>
 
        </div>
    )
}


export default Card