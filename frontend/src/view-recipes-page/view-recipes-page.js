import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './view-recipes-page.css';
import Navbar from '../navbar/navbar';

const ViewRecipesPage = () => {

    const username = sessionStorage.getItem('username');
    const [recipes, setRecipes] = useState(null);    

    const fetchRecipes = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/recipes/`);
            if(!response.ok) {
                throw new Error("Failed to fetch recipes");
            }
            const data = await response.json();
            setRecipes(data);
        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchRecipes();
        console.log(recipes);
    }, []);

    return  (
        <div className="view-recipe">
            <Navbar/>
            <div className="bg">
                <div className="main-container">
                    <h2>All Recipes</h2>
                    <div className="recipes">
                        {recipes && recipes.map(recipe => (
                            <div className="card">
                                <div className="card-image">
                                    <img src={recipe.image}></img>
                                </div>
                                <div className="card-content">
                                    <h3><a href={`/recipe/${recipe.recipe_id}`}>{recipe.title}</a></h3>
                                    {/* <p>{recipe.author.first_name}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewRecipesPage;