import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './signup-page.css';


const SignupPage = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [passConfirm, setPassConfirm] = useState({confirmPassword: '',})
    const [passwordsMatch, setPasswordsMatch] = useState(true); 
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [defaultError, setDefaultError] = useState(false);
    const [blankError, setBlankError] = useState(false);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setPassConfirm(prevState => ({
            ...prevState,
            [name]: value
        }))
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (formData.password !== passConfirm.confirmPassword) {
            setPasswordsMatch(false);
            return;
        } else {
            setPasswordsMatch(true);
        };

        fetch('http://localhost:8000/api/registration/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then (
            response => {
                if (!response.ok) {
                    return response.json().then(data => {
                        // Check if the error response contains multiple errors
                        if (data && typeof data === 'object' && Object.keys(data).length > 0) {
                            const errorMessage = Object.values(data).join(', '); // Join multiple error messages
                            console.log(errorMessage)
                            throw new Error(errorMessage);
                        } else {
                            throw new Error('Unknown error occurred');
                        }
                    });
                }        
                return response.json();
            }
        ).then(
            data => {
                console.log('Success: ', data)
                return <Navigate to="/profile" />;  
            }
        ).catch(
            error => {
                console.error('Error: ', error);
                const errorMessage = error.message;

                // Check for specific error messages using regular expressions
                const usernameError = /A user with that username already exists/.test(errorMessage);
                const emailError = /valid email address/.test(errorMessage);
                const blankError = /field may not be blank/.test(errorMessage);

                // Set state variables based on the matched error messages
                setUsernameError(usernameError);
                setEmailError(emailError);
                setBlankError(blankError)
                setDefaultError(!usernameError && !emailError && !blankError);

            }
        );
    };

    return  (
        <div className = "bg">
            <div className = "form-container">
                <div class = "logo-container">
                    <img className = 'logo' src="/Logo.svg" alt = "Logo" />
                    <h1>CookingIna</h1>
                </div>
                <div className = "right-container">
                    <div className = "shadow"></div>
                    <form>
                        <div className="creds-container">
                            <p>Sign up for an account:</p>
                            {blankError &&
                                <div className='error'>Please Fill All Fields.</div>
                            }
                            {defaultError &&
                                <div className='error'>An Unknown Error Occurred.</div>
                            }
                            {usernameError && 
                                <div className="error">Username Already Exists</div>
                            }
                            <input 
                                type = "text" 
                                name = "username"
                                className = {`input ${submitted && !formData.username ? 'empty-field': ''}`}
                                placeholder = "Username"
                                value={ formData.username }
                                onChange={handleChange}   
                                required                          
                            />
                            {emailError && 
                                <div className="error">Invalid Email Address</div>
                            }
                            <input
                                type = "text"
                                name = "email"
                                className = {`input ${submitted && !formData.email ? 'empty-field': ''}`}
                                placeholder = "Email"
                                value = { formData.email }
                                onChange = {handleChange}
                                required    
                            />
                            <input 
                                type = "password" 
                                name = "password"
                                className = {`input ${submitted && !formData.password ? 'empty-field': ''}`} 
                                placeholder = "Password" 
                                value = { formData.password }
                                onChange = {handleChange}
                                required
                            />
                            {!passwordsMatch && 
                                <div className="error" id="password">Password does not match</div>
                            }
                            <input
                                type = "password" 
                                name = "confirmPassword"
                                class = {`input ${submitted && !passConfirm.confirmPassword ? 'empty-field': ''}`}
                                placeholder = "Confirm Password" 
                                value = { passConfirm.confirmPassword }
                                onChange = {handleChange}
                                required
                            />
                        </div>
                        <div className="button" onClick={handleSubmit}>
                            <p>Sign Up</p>
                        </div>
                    </form>
                    <div className='login-container'>
                        <p>Already have an account?</p>
                        <p><Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;