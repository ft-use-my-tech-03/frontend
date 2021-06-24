import React, {useState, useEffect} from 'react' 
import {useParams} from 'react-router-dom'
import axios from 'axios'

function Details(props){
  
    const {id} = useParams() 
useEffect(()=>{
    console.log(`https://usemytechstuff3.herokuapp.com/api/products/${id}`)
   axios.get(`https://usemytechstuff3.herokuapp.com/api/products/${id}`)
   .then(function(res){
 console.log(res.data)
 setItem(res.data)
   })  /// api/products/:id
   .catch(function (error){
       console.log(error)
   })
}, [])

const [item, setItem] = useState({})


//class name is placeholder for future styling 
    return(
    <div className = 'sbox'>   
        <img src = {item.image_url} ></img>
        <div> Item: {item.item_name} </div> 
        <div> Category: {item.item_category} </div>
        <div> Price: ${item.price} </div>
        <div> Term: {item.rentalTerm} </div>
        <div> Availability: {item.available ? 'Available': 'Out of Stock'} </div>
        <div> Quantity: {item.item_quantity} </div>
        <div> Description: {item.item_description} </div>
        
    </div>
    )
}





export default Details