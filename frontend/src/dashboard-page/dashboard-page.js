import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './dashboard-page.css';
import Navbar from '../navbar/navbar';

const DashboardPage = () => {

    const username = sessionStorage.getItem('username');
    const [recipes, setRecipes] = useState(null);
    const [cookbooks, setCookbooks] = useState(null);
    

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
    const fetchCookbooks = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/cookbooks/`);
            if(!response.ok) {
                throw new Error("Failed to fetch cookbooks");
            }
            const data = await response.json();
            setCookbooks(data);
        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchRecipes();
        fetchCookbooks();
        console.log(recipes);
        console.log(cookbooks);
    }, []);
   
    return  (
        <div className="dashboard"><div className="bg">
            <Navbar/>
            
            <div className="main-container">
                <div className="left-container">
                    <div className="recipe-search">
                        <h2>Recipe</h2>
                        <div className="input-container">
                            <input type="text" id="search-recipe" name="search-recipe" maxLength="20" placeholder="Search Recipe"/>
                        </div>
                        <p>View All Recipes</p>
                    </div>

                    <div className="filter-by">
                        <h2>Filter by</h2>
                        <ul className="accordion">
                            <li>
                                <input type="radio" name="accordion" id="first" checked/>
                                <label htmlFor="first">Category</label>
                                <div className="content">
                                    <div className="subcontent">
                                        <input type="checkbox" id="category1" name="category1" value="breakfast"/>
                                        <label htmlFor="category1">Breakfast</label><br/>
                                    </div> 
                                    <div className="subcontent">
                                        <input type="checkbox" id="category2" name="category2" value="lunch"/>
                                        <label htmlFor="category2">Lunch</label><br/>
                                    </div> 
                                    <div className="subcontent">
                                        <input type="checkbox" id="category3" name="category3" value="dinner"/>
                                        <label htmlFor="category3">Dinner</label><br/>
                                    </div> 
                                    <div className="subcontent">
                                        <input type="checkbox" id="category4" name="category4" value="snack"/>
                                        <label htmlFor="category4">Snack</label><br/>
                                    </div> 
                                    <div className="subcontent">
                                        <input type="checkbox" id="category5" name="category5" value="dessert"/>
                                        <label htmlFor="category5">Dessert</label><br/>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <input type="radio" name="accordion" id="second"/>
                                <label htmlFor="second">Cuisine</label>
                                <div className="content">
                                    <div className="subcontent">
                                        <input type="checkbox" id="cuisine1" name="cuisine1" value="filipino"/>
                                        <label htmlFor="cuisine1">Filipino</label><br/>
                                    </div> 
                                    <div className="subcontent">
                                        <input type="checkbox" id="cuisine2" name="cuisine2" value="korean"/>
                                        <label htmlFor="cuisine2">Korean</label><br/>
                                    </div> 
                                    <div className="subcontent">
                                        <input type="checkbox" id="cuisine3" name="cuisine3" value="chinese"/>
                                        <label htmlFor="cuisine3">Chinese</label><br/>
                                    </div> 
                                    <div className="subcontent">
                                        <input type="checkbox" id="cuisine4" name="cuisine4" value="japanese"/>
                                        <label htmlFor="cuisine4">Japanese</label><br/>
                                    </div> 
                                    <div className="subcontent">
                                        <input type="checkbox" id="cuisine5" name="cuisine5" value="american"/>
                                        <label htmlFor="cuisine5">American</label><br/>
                                    </div>
                                    <div className="subcontent">
                                        <input type="checkbox" id="cuisine6" name="cuisine6" value="italian"/>
                                        <label htmlFor="cuisine6">Italian</label><br/>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className="filter-button">Filter</div>
                    </div>
                </div>

                <div className="right-container">
                    <h2>Recently Created Cookbooks</h2>
                    <div className="recently-created-cookbooks">
                    {cookbooks && cookbooks.map(cookbook => (
                            <div className="card">
                                <div className="card-image">
                                    <img src={cookbook.image}></img>
                                </div>
                                <div className="card-content">
                                    <h3><a href={`/cookbook/${cookbook.cookbook_id}`}>{cookbook.name}</a></h3>
                                    <p>{cookbook.author.first_name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2>Recipes</h2>
                    <div className="recipes">
                        {recipes && recipes.slice(0, 6).map(recipe => (
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
        </div></div>
    );
};

export default DashboardPage;