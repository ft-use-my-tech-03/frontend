import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { logIn } from '../store';
import schema from '../validation/formSchema';
import * as yup from 'yup';
// import axios from 'axios'

function Login({isLoggedIn}) {

    const dispatch = useDispatch()

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

    const inputChange = (name, value) => {

        yup.reach(schema, name)
            .validate(value)
            .then(() => {
                setFormError({ ...formError, [name]: '' })
            })
            .catch((err) => {
                setFormError({ ...formError, [name]: err.errors[0] })
            })


        setForm({ ...form, [name]: value })
    }

    useEffect(() => {
        schema.isValid(form)
            .then(valid => {
                setDisabled(!valid)           
        })
    }, [form])

    const onChange = (event) => {
        const { name, value } = event.target;
        inputChange(name, value);
    }

    const handleLogIn = (e) => {
        e.preventDefault();        
        dispatch(logIn(form))
        // axios.post('https://usemytechstuff3.herokuapp.com/api/auth/login', form)
        // .then(res => {
        //     console.log(res.data)
        //     localStorage.setItem('token', res.data.token);
        //     logIn(res.data.data.user_id);
        //     push('/');
        // })
        // .catch(err => {
        //     console.log(err);
        // })
    }

    return (
        <div className="sboxParent">
            <div className="sbox">
                <form onSubmit={handleLogIn}>
                    <div>
                        <div className="errors">
                            <div>{formError.username}</div>
                            <div>{formError.password}</div>
                            {/* <div>{formError.phoneNumber}</div> */}
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
                            type="password" />
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

export default connect(mapStateToProps, {})(Login)