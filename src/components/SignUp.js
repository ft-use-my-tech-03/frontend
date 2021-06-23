import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../store';
import schema from '../validation/formSchema';
import * as yup from 'yup';


const initialSignUpValues = {
    username: '',
    password: '',
    email: '',
    phoneNumber: ''
}

const initialErrorValues = {
    username: '',
    password: '',
    email: '',
    phoneNumber: ''
}

function SignUp({addUser}) {
    const [signUpValues, setSignUpValues] = useState(initialSignUpValues)
    const [errorValues, setErrorValues] = useState(initialErrorValues)
    const { push } = useHistory();
    
    const onChange = (event) => {
        const { name, value } = event.target;
        inputChange(name, value);
    }
    
    const inputChange = (name, value) => {

        yup.reach(schema, name)
            .validate(value)
            .then(() => {
                setErrorValues({ ...errorValues, [name]: '' })
            })
            .catch((err) => {
                setErrorValues({ ...errorValues, [name]: err.errors[0] })
            })

        setSignUpValues({ ...signUpValues, [name]: value })
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        addUser(signUpValues)
        push('/techform')
    }

    return (
        <div>
            <div className="sbox">
                <h1>Create an account</h1>
                <div className="errors">
                                <div>{errorValues.username}</div>
                                <div>{errorValues.password}</div>
                            </div>
                <form className = 'form container' onSubmit={handleSignUp}>
                    <label>Username:
                        <input
                            type = 'text'
                            value = {signUpValues.username}
                            onChange = {onChange}
                            name = 'username'
                        />
                    </label>
                    <label>Password:
                        <input 
                            type = 'password'
                            value = {signUpValues.password}
                            onChange = {onChange}
                            name = 'password'
                        />
                    </label>
                    <label>Email:
                        <input
                            type='text'
                            name='email'
                            onChange={onChange}
                            value={signUpValues.email}
                        />
                    </label>
                    <label>Phone Number:
                        <input
                            type='text'
                            name='phoneNumber'
                            onChange={onChange}
                            value={signUpValues.phoneNumber}
                        />
                    </label>
                    <button>Sign Up Now!</button>
                </form>
            </div>
        </div>
    )
}

export default connect(null, {addUser})(SignUp)