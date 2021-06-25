import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "./card.css"
import Card from './Card'
import { Link } from 'react-router-dom'


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        let endpoint = 'https://usemytechstuff3.herokuapp.com/api/products'
        axios({
            url: endpoint,
            method: 'get'
        }).then((res) => {
            console.log(res.data)
            setProducts(res.data)
        })
    }, [])

    const handleCategory = (item) => {
        console.log(item.item_category + "clicked!")
    }

    return (        
        <div className="sboxP">
            <h1 className="productsHeader">Rent your most wanted equipment today.</h1>
            <div className="sboxProducts">
                
                    <div className="list-section">
                        {
                            products.map((item) => (
                                <Card item = {item}/>
                            ))
                        }
                    </div>
                    <div>
                        <h2 classname="productsHeader2"> Camera and Equipment Rental Categories </h2>               
                        <div className="rentals"> 
                        {
                            products.map((item, index) => (
                                <h2 class="rentalCat" onClick={handleCategory(item)} key={index}>{item.item_category}</h2>
                            ))
                        }
                        </div> 
                    </div>
            </div>
               
            </div>         
    )
}

export default Products