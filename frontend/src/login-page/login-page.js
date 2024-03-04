import React from 'react';
import './login-page.css'

const LoginPage = () => {
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
                    <div className="creds-container">
                        <p>Login to your account:</p>
                    </div>
                    <div className="button">
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;