import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './login-page.css';

const LoginPage = () => {

    const navigate = useNavigate();

    const [credError, setCredError] = useState(false);

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
                if (!response.ok) {
                    return response.json().then(data => {
                        // Check if the error response contains multiple errors
                        if (data && typeof data === 'object' && Object.keys(data).length > 0) {
                            const errorMessage = Object.values(data).join(', '); // Join multiple error messages
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
                sessionStorage.setItem('username', formData.username);
                navigate('/dashboard')
            }
        ).catch(
            error => {
                console.error('Error: ', error);
                const errorMessage = error.message;

                const credError = /credentials/.test(errorMessage);
                setCredError(credError);
            }
        );
    };

    return  (
        <div className="login"><div className="bg">
            <div className="login_form-container">
                <div className="login_logo-container">
                    <img className='login_logo' src="/Logo.svg" alt="Logo" />
                    <h1>CookingIna</h1>
                </div>
                <div className="login_right-container">
                    <div className="login_shadow"></div>
                    <div className="login_welcome">
                        <p>Welcome back!</p>
                    </div>
                    <form>
                        <div className="login_creds-container">
                            <p>Login to your account:</p>
                            {credError && 
                                <div className='login_error'>Invalid Username or Password</div>
                            }
                            <input 
                                type="text" 
                                name="username"
                                className="login_input" 
                                placeholder="Username"
                                value={ formData.username }
                                onChange={handleChange}
                                required                             
                            />
                            <input 
                                type="password" 
                                name="password"
                                className="login_input" 
                                placeholder="Password" 
                                value={ formData.password }
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="login_button" onClick={handleSubmit}>
                            <p>Login</p>
                        </div>
                    </form>
                    <div className='login_sign-up-container'>
                        <p>Don't have an account?</p>
                        <p><Link to='/signup'>Sign-Up</Link></p>
                    </div>
                </div>
            </div>
        </div></div>
    );
};

export default LoginPage;