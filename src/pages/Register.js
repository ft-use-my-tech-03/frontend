import React from 'react'
import { useFormik } from 'formik'
import "./register.css"

const validate = values => {
    const errors = {}
    // Username Validation
    // First Name
    if(!values.firstName || values.firstName.length < 2) {
        errors.firstName = 'Must be 2 characters or more';
    } else if(values.firstName.length > 15 ) {
        errors.firstName = 'Must be 15 characters or less';
    } else if (/[@.$:\/]/i.test(values.firstName)) {
        errors.firstName = 'First Name cannot contain special characters'
    }

    // last name
    if(!values.lastName || values.lastName.length < 2) {
        errors.lastName = 'Must be 2 characters or more';
    } else if(values.lastName.length > 15) {
        errors.lastName = 'Must be 15 Characters or less'
    } else if (/[@.$:\/]/i.test(values.lastName)) {
        errors.lastName = 'Last Name cannot contain special characters'
    }

    // Email Validation
    if(!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    // Password Validation
    if(!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more'
    }

    // Password / Confirm Password Validation
    if(!values.confirmPassword) {
        errors.confirmPassword = 'Required'
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password must be matched"
    }

    return errors
}

const Register = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate,
        onSubmit: values => {
            console.log(JSON.stringify(values))
        }
    })    

    return (
        <div className="register_section">
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input 
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                /><br></br>
                {formik.errors.firstName ? <div style={{color: 'red'}}>{formik.errors.firstName}</div> : null}

                <label htmlFor="lastName">Last Name: </label>
                <input 
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                /><br></br>
                {formik.errors.lastName ? <div style={{color: 'red'}}>{formik.errors.lastName}</div> : null}

                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}                   
                    value={formik.values.email}

                /><br></br>
                {formik.errors.email?<div style={{color: 'red'}}>{formik.errors.email}</div>:null}

                <label htmlFor="password">Password: </label>
                <input 
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                /><br></br>
                {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}

                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input 
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                /><br></br>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register