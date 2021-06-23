import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../store'


function NavBar({isLoggedIn, logOut}) {
    const { push } = useHistory()
    
    const handleLogOut = (e) => {
        window.localStorage.removeItem('token')
        logOut()
        push('/signup')
    }
    
    return (
        <div className="wrapper">
            <div className="container">
            <div className="nav">
            <div className="logo">LensRentals</div>
            <div className="menu">
                <ul className="navMenu">
                    <nav>
                        <Link to="/">
                            <li>
                                <a href="#0">
                                    Home
                                </a>
                            </li>
                        </Link>
                        { !isLoggedIn && 
                        <Link to="/login">
                            <li>
                                <a href="#0">
                                    Login
                                </a>
                            </li>
                        </Link>}
                        {isLoggedIn ? 
                        <Link onClick={handleLogOut}>
                            <li>
                                <a href="#0">
                                    Log Out
                                </a>
                            </li>
                        </Link>
                            :
                        <Link to="/signup">
                            <li>
                                <a href="#0">
                                    Sign Up
                                </a>
                            </li>
                        </Link>}
                        { isLoggedIn && 
                        <Link to="/dashboard">
                            <li>
                                <a href="#0">
                                    Dashboard
                                </a>
                            </li>
                            
                        </Link>}
                    </nav>
                </ul>
            </div>
        </div>
        </div>
        
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, {logOut})(NavBar)