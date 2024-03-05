import React, { useState } from 'react';
import './login-page.css';

const LoginPage = () => {

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

        fetch('http://localhost:8000/api/login/', {
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
        <div className="bg">
            <div className="form-container">
                <div className="logo-container">
                    <img className='logo' src="/Logo.svg" alt="Logo" />
                    <h1>CookingIna</h1>
                </div>
                <div className="right-container">
                    <div className="shadow"></div>
                    <div className="welcome">
                        <p>Welcome back!</p>
                    </div>
                    <form>
                        <div className="creds-container">
                            <p>Login to your account:</p>
                            <input 
                                type="text" 
                                name="username"
                                className="input" 
                                placeholder="Username"
                                value={ formData.username }
                                onChange={handleChange}                             
                            />
                            <input 
                                type="password" 
                                name="password"
                                className="input" 
                                placeholder="Password" 
                                value={ formData.password }
                                onChange={handleChange}
                            />
                        </div>
                        <div className="button" onClick={handleSubmit}>
                            <p>Login</p>
                        </div>
                    </form>
                    <div className='sign-up-container'>
                        <p>Don't have an account?</p>
                        <p id='sign-up'>Sign-Up</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;