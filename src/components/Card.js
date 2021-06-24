import React from 'react'
import "./card.css"

const Card = (item) => {
    return (
        <div className="card-section">
            <div className="image-sec">
                image section
            </div>
            <div className="body">
                <h3>{item.item.title}</h3>
                <p>$ - {item.item.description}</p>
                <div>
                    <button>{item.item.timeline}</button>
                    <button style={{marginLeft: 10}}>${item.item.fee}Rental Cost</button>
                </div>
            </div>
        </div>
    )
}


export default Card