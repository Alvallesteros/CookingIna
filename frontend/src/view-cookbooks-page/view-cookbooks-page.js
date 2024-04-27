import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './view-cookbooks-page.css';

const ViewCookbooksPage = () => {

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
        <div class="bg">
            <nav class="navbar">
                <div class="logo-container">
                    <img alt="Logo" class="logo"/>
                    <span class="logo-text">CookingIna</span>
                </div>

                <div class="navbar-links">
                    <div class="navbar-home">
                        <a href="#">Home</a>
                    </div>
                    <div class="navbar-recipes">
                        <a href="#">Recipes</a>
                        <div class="dropdown">
                            <div class="dropdown-entry-1">
                                <div class="temp-icon"></div>
                                <a href="#">View Own<br/>Recipes</a>
                            </div>
                            <div class="dropdown-entry-2">
                                <div class="temp-icon"></div>
                                <a href="#">Create Recipe</a>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-cookbooks">
                        <a href="#">Cookbooks</a>
                        <div class="dropdown">
                            <div class="dropdown-entry-1">
                                <div class="temp-icon"></div>
                                <a href="#">View<br/>Cookbooks</a>
                            </div>
                            <div class="dropdown-entry-2">
                                <div class="temp-icon"></div>
                                <a href="#">Create<br/>Cookbook</a>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-profile">
                        <a href="#">Profile</a>
                        <div class="dropdown">
                            <div class="dropdown-entry-1">
                                <div class="temp-icon"></div>
                                <a href="#">View Profile</a>
                            </div>
                            <div class="dropdown-entry-2">
                                <div class="temp-icon"></div>
                                <a href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            <div class="main-container">
                <h2>All Cookbooks</h2>
                <div class="card-container">
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h3>Cookbook Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h3>Cookbook Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h3>Cookbook Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h3>Cookbook Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h3>Cookbook Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h3>Cookbook Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h3>Cookbook Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h3>Cookbook Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h3>Cookbook Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h3>Cookbook Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h3>Cookbook Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h3>Cookbook Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCookbooksPage;