import React, { useState } from 'react';
import './signup-page.css';

const SignupPage = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/api/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then (
            response => {
                if(!response.ok) {
                    throw new Error('API Could not be reached');
                }
                return response.json();
            }
        ).then(
            data => {
                console.log('Success: ', data)
            }
        ).catch(
            error => {
                console.error('Error: ', error);
                console.log(e)
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
                            <input 
                                type = "text" 
                                nam = "username"
                                className = "input" 
                                placeholder = "Username"
                                value={ formData.username }
                                onChange={handleChange}                             
                            />
                            <input
                                type = "text"
                                name = "email"
                                className = "input"
                                placeholder = "Email"
                                value = { formData.username }
                                onChange = {handleChange}
                            />
                            <input 
                                type = "password" 
                                name = "password"
                                className = "input" 
                                placeholder = "Password" 
                                value = { formData.password }
                                onChange = {handleChange}
                            />
                            <input
                                type = "password" 
                                name = "confirm-password"
                                class = "input" 
                                placeholder = "Confirm Password" 
                                value = { formData.password }
                                onChange = {handleChange}
                            />
                        </div>
                        <div className="button" onClick={handleSubmit}>
                            <p>Sign Up</p>
                        </div>
                    </form>
                    <div className='login-container'>
                        <p>Already have an account?</p>
                        <p id='login'>Login</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;