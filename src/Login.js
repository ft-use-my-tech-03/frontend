import react from 'react'


 function Login(props) {
    
    const {
         values,
         update,
     } = props

     const onChange =event =>{
       const {name,value} = event.target
       update( name,value)
     }

return (
<div className = 'login'>
     <label>Username
         <input
         value = {values.username}
         type = 'text'
         name = 'username'
         onChange = {onChange}
         />
     </label>
     <label> Password
         <input
         value = {values.password}
         type = 'password'
         name = 'password'
         onChange= {onChange}
         />
     </label>
     <button className = 'sub-btn '>Submit</button>
 </div>
    )
 }
 export default Login 