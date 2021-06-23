<<<<<<< HEAD
=======
import logo from './logo.svg';
import './App.css';
import * as yup from 'yup'
import {Route} from 'react-router-dom'
import Login  from './Login'
import {useState, useEffect} from 'react'
import schema from './formSchema'
import axios from 'axios'

const loginValues ={
  username: '',
  password:''
  }
  

  const initialErrors ={
    name:'',
    password:'',
  }
  const initialDisabled = true
>>>>>>> main
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

<<<<<<< HEAD
import Register from './components/Register';
import Home from './Home'
import Header from './layout/Header'



function RegisterUser() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register}/>
      </Switch>
    </Router>
=======
function App() {
  const [users, setUsers] = useState([])
 const [signIn, setSignIn] = useState(loginValues) 
 const [disabled, setDisabled] = useState(initialDisabled)
 const [formErrors, setFormErrors] = useState(initialErrors)
 
 const updateInput = (name, value) =>{
  validate(name,value)
   setSignIn({
     ...signIn,[name]: value
   })
}

useEffect(() => {
  schema.isValid(signIn).then(valid=> {
   setDisabled(!(valid))
  })
 }, [signIn])

const validate = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(()=> setFormErrors({ ...formErrors, [name]: ''}))
  .catch(err =>{
    console.log(err.message)
    console.log(formErrors)
    setFormErrors( {...formErrors,[name]: err.message})
  })
}

const postUser = () => { //place holder for sign in submission.   
  const newUser = {...signIn}
 axios.post('http://localhost:3000/', newUser)
 .then(res =>{
   console.log(res.data)
   setUsers([res.data, ...users])
 })
}
  return (
    <div className="log-in">
      <header className="header">
        <h1>Use My Tech Stuff</h1>
        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfKoyXqZ2nyrFh_8Fv7MmPcbUHgOnSzpZzw&usqp=CAU' alt = 'tech logo'/>
        <Login
        update = {updateInput}
        values = {signIn}
        disabled ={disabled} 
        submit= {postUser}
        errors= {formErrors}
        />
        <p>
         Don't have an account?
        </p>
        <a
          className="App-link"
          href="null"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Today
        </a>
      </header>
    </div>
>>>>>>> main
  );
  
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register}/>
      </Switch>
    </Router>
  );
}

export default RegisterUser;
