import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './cookbooks-page.css';

const CookbooksPage = () => {

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

    const username = sessionStorage.getItem('username');

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
        <div className="bg">
            <nav className="navbar">
                <div className="logo-container">
                    <img alt="Logo" className="logo"/>
                    <span className="logo-text">CookingIna</span>
                </div>
                
                <div className="navbar-links">
                    <div className="navbar-home">
                        <a href="/home">Home</a>
                    </div>
                    <div className="navbar-recipes">
                        <a href="/recipes">Recipes</a>
                        <div className="dropdown">
                            <div className="dropdown-entry-1">
                                <div className="temp-icon"></div>
                                <a href="#">View Own<br/>Recipes</a>
                            </div>
                            <div className="dropdown-entry-2">
                                <div className="temp-icon"></div>
                                <a href="/recipes/create">Create Recipe</a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-cookbooks">
                        <a href="#">Cookbooks</a>
                        <div className="dropdown">
                            <div className="dropdown-entry-1">
                                <div className="temp-icon"></div>
                                <a href="/cookbooks">View<br/>Cookbooks</a>
                            </div>
                            <div className="dropdown-entry-2">
                                <div className="temp-icon"></div>
                                <a href="/cookbooks/create">Create<br/>Cookbook</a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-profile">
                        <a href={`/profile/${username}`}>Profile</a>
                        <div className="dropdown">
                            <div className="dropdown-entry-1">
                                <div className="temp-icon"></div>
                                <a href={`/profile/${username}`}>View Profile</a>
                            </div>
                            <div className="dropdown-entry-2">
                                <div className="temp-icon"></div>
                                <a href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="banner">
                <div className="cookbook-image-placeholder"></div>
                <h2 className="banner-text">My Cookbooks</h2>
                
                <div className="banner-buttons">
                    <div className="banner-button-a">
                        <a href="#">Create Cookbook</a>
                    </div>
                    <div className="banner-button-b">
                        <a href="#">View All Cookbooks</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="card-container">
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookbooksPage;