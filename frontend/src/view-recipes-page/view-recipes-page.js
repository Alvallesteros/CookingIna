import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './view-recipes-page.css';
import Navbar from '../navbar/navbar';

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
            <Navbar/>
            
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