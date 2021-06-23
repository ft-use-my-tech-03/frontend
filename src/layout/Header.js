import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
            <div className="header-section">
            <div>
                    <Link class="loginButton" to="/login">Login</Link>
                    <Link class="registerButton" to="/register">Register Today</Link>
                
                <h1 class="headerLogoText">Use My Tech Stuff</h1>         
            </div>
        </div>
    )
}


export default Header