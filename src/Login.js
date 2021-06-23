import react from 'react'


 function Login(props) {
    
    const {
         values,
         update,
         errors,
         submit,
         disabled
     } = props

     const onChange =event =>{
       const {name,value} = event.target
       update( name,value)
     }

     const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

return (
<div className = 'login'>
    <div>{errors.username}</div>
    <div>{errors.password}</div>
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
     <button onClick = {onSubmit} disabled = {disabled}>Sign In</button>
 </div>
    )
 }
 export default Login 