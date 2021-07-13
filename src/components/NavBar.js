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
        
        <div className="container">
            <div className="nav">
            <div className="logo">Lens Rentals</div>
            <div className="menu">
                <ul className="navMenu">
                    <nav>
                        
                            <li>
                                <Link to="/">                                
                                    Home                                
                                </Link>
                            </li>
                        
                        
                            <li>
                            <Link to="/products">
                                    Products
                                    </Link>
                            </li>
                        
                        { !isLoggedIn && 
                        
                            <li>
                                <Link to="/login">
                                    Login
                                    </Link>
                            </li>
                        }
                        {isLoggedIn ? 
                        
                            <li>
                                <Link to="" onClick={handleLogOut}>
                                    Log Out
                                    </Link>
                            </li>
                        
                            :
                        
                            <li>
                                <Link to="/signup">
                                    Sign Up
                                    </Link>
                            </li>
                        }
                        { isLoggedIn && 
                        
                            <li>
                                <Link to="/dashboard">
                                    Dashboard
                                    </Link>
                            </li>
                            
                        }
                        
                            <li>
                            <Link to="/register">
                                    Register
                                    </Link>
                            </li>
                        
                    </nav>
                </ul>
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