import React from 'react'
import "./card.css"
import Card from './Card'
import { Link } from 'react-router-dom'

const dummyData = [
    {
        title: "Canon EOS R5",
        description: "Mirrorless SLR",
        timeline: "1-2 days",
        fee: "299.99"
    },
    {
        title: "Nikon 850",
        description: "Nikon DSLR",
        timeline: "1-2 days",
        fee: "299.99"
    },
    {
        title: "Nikon Z 7",
        description: "Mirrorless SLR",
        timeline: "1-2 days",
        fee: "299.99"
    },
]

const Products = () => {
    return (        
        <div className="homepage-section">
        <div className="home-header-section">
                <h1 className="productsHeader">Rent your most wanted equipment today.</h1>
            <div className="products-content-section">
                <div>
                    <h2 classname="productsHeader2">
                        Camera and Equipment Rentals
                     </h2>               
                    <div> 
                       <h2 class="categoryLinks">Camera</h2> <h2 class="categoryLinks">Lenses</h2> <h2 class="categoryLinks">Drones</h2> <h2 class="categoryLinks">Lights</h2> 
                    </div> 
                </div>
                <div className="list-section">
                    {
                        dummyData.map((item) => (
                            <Card item = {item}/>
                        ))
                    }
                </div>
            </div>
        </div>   
        </div>            
    )
}

export default Products