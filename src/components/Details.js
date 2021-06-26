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
    <div className = 'dbox'> 
        <img class="detailImg" src = {item.image_url} ></img><br></br><br></br>
        <div> Item: {item.item_name} </div> <br></br>
        <div> Category: {item.item_category} </div><br></br>
        <div> Price: ${item.price} </div><br></br>
        <div> Term: {item.rentalTerm} </div><br></br>
        <div> Availability: {item.available ? 'Available': 'Out of Stock'} </div><br></br>
        <div> Quantity: {item.item_quantity} </div><br></br>
        <div> Description: {item.item_description} </div><br></br>
        
    </div>
    )
}





export default Details