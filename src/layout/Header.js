import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="header-section">
            <div>
                    <Link class="loginButton" to="/login">Login</Link>
                    <Link class="registerButton" to="/register">Register Today</Link>
                
                <h1 class="headerLogoText">Use My Tech Stuff</h1> 
                <div className="img-section">
                    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfKoyXqZ2nyrFh_8Fv7MmPcbUHgOnSzpZzw&usqp=CAU' alt = 'tech logo'/>
                </div>                
            </div>
        </div>
        </div>
    )
}


export default Header