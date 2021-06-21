import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Login  from './Login'
import {useState} from 'react'

const loginValues ={
  username: '',
  password:''
  }
  
  const initialDisabled = true

function App() {
 const [signIn, setSignIn] = useState(loginValues) 
 const [disabled, setDisabled] = useState(initialDisabled)
 const updateInput = (name, value) =>{
   setSignIn({
     ...signIn,[name]: value
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
        />
        <p>
         Dont have an account?
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
  );
}

export default App;
