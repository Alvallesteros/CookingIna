import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './recipe-details-page.css';


const RecipeDetailsPage = () => {

    const { recipeId } = useParams();
    const [recipeData, setRecipeData] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [rating, setRating] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); 
            setError(null); 
            try {
                const response = await fetch(`http://localhost:8000/api/recipes/${recipeId}/`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecipeData(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [recipeId]);

    const handleClick = (value) => {
        setRating(value);
    };

    const handleMouseOver = (value) => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    return  (
        <div className="bg">
            <nav className="navbar">
                <div className="logo-container">
                    <img alt="Logo" className="logo"/>
                    <span className="logo-text">CookingIna</span>
                </div>
                <ul className="navbar-ul">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#recipes">Recipes</a>
                    </li>
                    <li>
                        <a href="#cookbooks">Cookbooks</a>
                    </li>
                    <li>
                        <a href="#profile">Profile</a>
                    </li>
                </ul>
            </nav>
            
            <div className="top-containers">
                <div className="recipe-description-container">
                    <div className="recipe-name-rating">
                        <h1>{recipeData ? recipeData.title : 'Loading...'}</h1>
                        <div className="recipe-rating">
                            <h1>{recipeData ? recipeData.average_rating : 0.0}★</h1>
                        </div>
                    </div>
    
                    <div className="username-writeup">
                        <h3>By: {recipeData ? recipeData.author.first_name + ' ' + recipeData.author.last_name : 'Author Loading...' }</h3>
                        <p>{recipeData ? recipeData.description : 'Description Loading...'}</p>
                    </div>
    
                    <div className="recipe-difficulty">
                        <h3>Difficulty:</h3>
                        <div className="difficulty-icons">
                            {recipeData ? Array(5).fill().map((_, index) => (
                                <embed
                                    key={index}
                                    type='image/svg+xml'
                                    src={index < recipeData.difficulty + 1 ? "/spatula_active.svg" : "/spatula.svg"}
                                    className='temp-spatula'
                                />
                            )): 'Loading...'}
                        </div>
                    </div>
    
                    <div className="cooking-techniques">
                        <h3>Cooking Techniques:</h3>
                        <p>Slicing, Whisking</p>
                    </div>
                    
                    <div className="nutritional-info">
                        <h3>Nutritional Information:</h3>
                        <p>179 Calories, 15g Total Fat, 25mg Cholesterol, 370mg Sodium, 7.4g Carbohydrates, 5.1g Protein</p>
                    </div>
                </div>

                <div className="main-image-container">
                    <img src={recipeData ? recipeData.image : ''} alt="Recipe" className="recipe-image" /> 
                </div>
            </div>

            <div className="bottom-containers">
                <div className="ingredients-container">
                    <h3>Ingredients:</h3>
                    <div className="ingredients-list-1">
                        <ul>
                            {recipeData && recipeData.ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="preparation-container">
                    <div className="preparation-text">
                        <h3>Preparation:</h3>
                        <ol>
                            {recipeData && recipeData.steps.split('\n').map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    
                    <div className="rate-recipe">
                        <h3>Rate this Recipe:</h3>
                        <div className="star-rating">
                            <input type="radio" id="1star" name="rating" value="1" />
                            <label for="1star">★</label>
                            <input type="radio" id="2star" name="rating" value="2" />
                            <label for="2star">★</label>
                            <input type="radio" id="3star" name="rating" value="3" />
                            <label for="3star">★</label>
                            <input type="radio" id="4star" name="rating" value="4" />
                            <label for="4star">★</label>
                            <input type="radio" id="5star" name="rating" value="5" />
                            <label for="5star">★</label>
                        </div>
                    </div>

                    <div className="recipe-buttons">
                        <div className="button">Report Recipe</div>
                        <div className="button">Back to Dashboard</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetailsPage;