import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../store';



function Login({isLoggedIn, logIn}) {

    const formState = {
        username: '',
        password: ''
    }

    const initialFormErrors = {
        username: '',
        password: ''
    }

    const initialDisabled = true;

    const [form, setForm] = useState(formState);
    const [formError, setFormError] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);


    const { push } = useHistory();

    const inputChange = () => {
    }

    useEffect(() => {
    })

    const onChange = (event) => {
        const { name, value } = event.target;
        inputChange(name, value);
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        logIn(form)
        push('/dashboard')
    }

    return (
        <div>
            <div>
                <form onSubmit={handleLogIn}>
                    <div>
                        <div className="errors">
                            <div>{formError.username}</div>
                            <div>{formError.password}</div>
                            <div>{formError.phoneNumber}</div>
                        </div>
                        <div>Username</div>
                        <input value={form.username}
                            onChange={onChange}
                            name="username"
                            type="text" />
                    </div>
                    <div>
                        <div>Password</div>
                        <input value={form.password}
                            onChange={onChange}
                            name="password"
                            type="text" />
                    </div>
                    <button disabled={disabled}>Login</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, {logIn})(Login)