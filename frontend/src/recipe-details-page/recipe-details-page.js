import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './recipe-details-page.css';

const RecipeDetailsPage = () => {

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
        <div className="bg">
            <nav className="navbar">
                <div className="logo-container">
                    <img alt="Logo" class="logo">
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
                        <h1>Recipe Name</h1>
                        <div className="recipe-rating">
                            <h1>#.#</h1>
                        <div className="temp-star"></div>
                        </div>
                    </div>
    
                    <div className="username-writeup">
                        <h3>@username</h3>
                        <p>This easy Greek salad recipe is a flavorful, refreshing summer side dish! If you make it ahead for a gathering, save a few mint leaves to add right before serving.</p>
                    </div>
    
                    <div className="recipe-difficulty">
                        <h3>Difficulty:</h3>
                        <div className="difficulty-icons">
                            <div className="temp-spatula"></div>
                            <div className="temp-spatula"></div>
                            <div className="temp-spatula"></div>
                            <div className="temp-spatula"></div>
                            <div className="temp-spatula"></div>
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
                    <div className="circle"></div>
                    <div className="recipe-image"></div>
                </div>
            </div>

            <div className="bottom-containers">
                <div className="ingredients-container">
                    <h3>Ingredients:</h3>
                    <div className="ingredients-list-1">
                        <h3>Dressing</h3>
                        <ul>
                            <li>¼ cup extra-virgin olive oil</li>
                            <li>3 tablespoons red wine vinegar</li>
                            <li>1 garlic clove, minced</li>
                            <li>½ teaspoon dried oregano, more for sprinkling</li>
                            <li>¼ teaspoon Dijon mustard</li>
                            <li>¼ teaspoon sea salt</li>
                            <li>Freshly ground black pepper</li>
                        </ul>
                    </div>
                    <div className="ingredients-list-2">
                        <h3>For the Salad</h3>
                        <ul>
                            <li>1 English cucumber, cut lengthwise, seeded, and sliced ¼-inch thick</li>
                            <li>1 green bell pepper, chopped into 1-inch pieces</li>
                            <li>2 cups halved cherry tomatoes</li>
                            <li>5 ounces feta cheese, cut into ½ inch cubes</li>
                            <li>⅓ cup thinly sliced red onion</li>
                            <li>⅓ cup pitted Kalamata olives</li>
                            <li>⅓ cup fresh mint leaves</li>
                        </ul>
                    </div>
                </div>

                <div className="preparation-container">
                    <div className="preparation-text">
                        <h3>Preparation:</h3>
                        <ol>
                            <li>Make the dressing: In a small bowl, whisk together the olive oil, vinegar, garlic, oregano, mustard, salt, and several grinds of pepper.</li>
                            <li>On a large platter, arrange the cucumber, green pepper, cherry tomatoes, feta cheese, red onions, and olives. Drizzle with the dressing and very gently toss. Sprinkle with a few generous pinches of oregano and top with the mint leaves. Season to taste and serve.</li>
                        </ol>
                    </div>
                    
                    <div className="rate-recipe">
                        <h3>Rate this Recipe:</h3>
                        <div className="star-rating">
                            <div className="temp-star"></div>
                            <div className="temp-star"></div>
                            <div className="temp-star"></div>
                            <div className="temp-star"></div>
                            <div className="temp-star"></div>
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