import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './view-recipes-page.css';

const ViewRecipesPage = () => {

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
        <div className="view-recipe"><div className="bg">
            <nav className="navbar">
                <div className="logo-container">
                    <img alt="Logo" className="logo"/>
                    <span className="logo-text">CookingIna</span>
                </div>

                <div className="navbar-links">
                    <div className="navbar-home">
                        <a href="#">Home</a>
                    </div>
                    <div className="navbar-recipes">
                        <a href="#">Recipes</a>
                        <div className="dropdown">
                            <div className="dropdown-entry-1">
                                <div className="temp-icon"></div>
                                <a href="#">View Own<br/>Recipes</a>
                            </div>
                            <div className="dropdown-entry-2">
                                <div className="temp-icon"></div>
                                <a href="#">Create Recipe</a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-cookbooks">
                        <a href="#">Cookbooks</a>
                        <div className="dropdown">
                            <div className="dropdown-entry-1">
                                <div className="temp-icon"></div>
                                <a href="#">View<br/>Cookbooks</a>
                            </div>
                            <div className="dropdown-entry-2">
                                <div className="temp-icon"></div>
                                <a href="#">Create<br/>Cookbook</a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-profile">
                        <a href="#">Profile</a>
                        <div className="dropdown">
                            <div className="dropdown-entry-1">
                                <div className="temp-icon"></div>
                                <a href="#">View Profile</a>
                            </div>
                            <div className="dropdown-entry-2">
                                <div className="temp-icon"></div>
                                <a href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            <div className="main-container">
                <h2>All Recipes</h2>
                <div className="card-container">
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    );
};

export default ViewRecipesPage;