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
        <div>
            <nav>
                <Link to="/">Home</Link>
                { !isLoggedIn && 
                    <Link to="/login">Login</Link>}
                {isLoggedIn ? 
                    <Link onClick={handleLogOut}>Log Out</Link>
                    :
                    <Link to="/signup">Sign Up</Link>}
                { isLoggedIn && 
                    <Link to="/dashboard">Dashboard</Link>}
            </nav>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, {logOut})(NavBar)