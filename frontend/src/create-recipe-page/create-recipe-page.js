import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './create-recipe-page.css';
import Navbar from '../navbar/navbar';

const CreateRecipePage = () => {

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
        <div className="create-recipe"><div className="bg">
            <Navbar/>

            <div className="main-container">
                <div className="left-container">
                    <h1>Create Recipe</h1>
                    <label for="recipe-name">Recipe Name:<br/></label>
                    <input type="text" id="recipe-name" name="recipe-name" maxlength="15"/><br/>
                    <label for="recipe-description">Recipe Description:<br/></label>
                    <input type="text" id="recipe-description" name="recipe-description" maxlength="180"/><br/>
                    
                    <div className="upload-and-difficulty">
                        <div className="upload">Recipe Image:
                            <div className="upload-button">↑ Upload Image</div>
                        </div>
                        <div className="difficulty">
                            <label className="difficulty-text">Difficulty:</label>
                            <div className="difficulty-icons">
                                <div className="temp-spatula"></div>
                                <div className="temp-spatula"></div>
                                <div className="temp-spatula"></div>
                                <div className="temp-spatula"></div>
                                <div className="temp-spatula"></div>
                            </div>
                        </div> 
                    </div>

                    <label for="cooking-techniques">Cooking Techniques:<br/></label>
                    <input type="text" id="cooking-techniques" name="cooking-techniques" maxlength="100"/><br/>
                    <label for="nutritional-information">Nutritional Information:<br/></label>
                    <input type="text" id="nutritional-information" name="nutritional-information" maxlength="200"/><br/>
                </div>

                <div className="shadow"></div>

                <div className="right-container">
                    <label for="ingredients">Ingredients:<br/></label>
                    <input type="text" id="ingredients" name="ingredients" maxlength="500"/><br/>
                    <label for="preparation">Preparation:<br/></label>
                    <input type="text" id="preparation" name="preparation" maxlength="500"/><br/>
                    <label className="categories">Categories:<br/></label>
                    <div className="categories-button">Select Categories</div>
                    <div className="bottom-recipe-buttons">
                        <div className="discard-button">Discard Recipe</div>
                        <div className="save-button">Save Recipe</div>
                    </div>
                </div>
            </div>
        </div></div>
    );
};

export default CreateRecipePage;