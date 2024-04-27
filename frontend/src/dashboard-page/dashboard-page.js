import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './dashboard-page.css';

const DashboardPage = () => {

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
        <div class="bg">
            <nav className="navbar">
                <div className="logo-container">
                    <img alt="Logo" className="logo"/>
                    <span className="logo-text">CookingIna</span>
                </div>
                
                <div className="navbar-links">
                    <div className="navbar-home">
                        <a href="/dashboard">Home</a>
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
            
            <div class="main-container">
                <div class="left-container">
                    <div class="recipe-search">
                        <h2>Recipe</h2>
                        <div class="input-container">
                            <input type="text" id="search-recipe" name="search-recipe" maxlength="20" placeholder="Search Recipe"/>
                        </div>
                        <p>View All Recipes</p>
                    </div>

                    <div class="filter-by">
                        <h2>Filter by</h2>
                        <ul class="accordion">
                            <li>
                                <input type="radio" name="accordion" id="first" checked/>
                                <label for="first">Category</label>
                                <div class="content">
                                    <div class="subcontent">
                                        <input type="checkbox" id="category1" name="category1" value="breakfast"/>
                                        <label for="category1">Breakfast</label><br/>
                                    </div> 
                                    <div class="subcontent">
                                        <input type="checkbox" id="category2" name="category2" value="lunch"/>
                                        <label for="category2">Lunch</label><br/>
                                    </div> 
                                    <div class="subcontent">
                                        <input type="checkbox" id="category3" name="category3" value="dinner"/>
                                        <label for="category3">Dinner</label><br/>
                                    </div> 
                                    <div class="subcontent">
                                        <input type="checkbox" id="category4" name="category4" value="snack"/>
                                        <label for="category4">Snack</label><br/>
                                    </div> 
                                    <div class="subcontent">
                                        <input type="checkbox" id="category5" name="category5" value="dessert"/>
                                        <label for="category5">Dessert</label><br/>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <input type="radio" name="accordion" id="second"/>
                                <label for="second">Cuisine</label>
                                <div class="content">
                                    <div class="subcontent">
                                        <input type="checkbox" id="cuisine1" name="cuisine1" value="filipino"/>
                                        <label for="cuisine1">Filipino</label><br/>
                                    </div> 
                                    <div class="subcontent">
                                        <input type="checkbox" id="cuisine2" name="cuisine2" value="korean"/>
                                        <label for="cuisine2">Korean</label><br/>
                                    </div> 
                                    <div class="subcontent">
                                        <input type="checkbox" id="cuisine3" name="cuisine3" value="chinese"/>
                                        <label for="cuisine3">Chinese</label><br/>
                                    </div> 
                                    <div class="subcontent">
                                        <input type="checkbox" id="cuisine4" name="cuisine4" value="japanese"/>
                                        <label for="cuisine4">Japanese</label><br/>
                                    </div> 
                                    <div class="subcontent">
                                        <input type="checkbox" id="cuisine5" name="cuisine5" value="american"/>
                                        <label for="cuisine5">American</label><br/>
                                    </div>
                                    <div class="subcontent">
                                        <input type="checkbox" id="cuisine6" name="cuisine6" value="italian"/>
                                        <label for="cuisine6">Italian</label><br/>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <input type="radio" name="accordion" id="third"/>
                                <label for="third">Ingredients</label>
                                <div class="content">
                                    <div class="subcontent">
                                        <input type="checkbox" id="ingredients1" name="ingredients1" value="salt"/>
                                        <label for="ingredients1">Salt</label><br/>
                                    </div> 
                                    <div class="subcontent">
                                        <input type="checkbox" id="ingredients2" name="ingredients2" value="pepper"/>
                                        <label for="ingredients2">Pepper</label><br/>
                                    </div> 
                                    <div class="subcontent">
                                        <input type="checkbox" id="ingredients3" name="ingredients3" value="olive-oil"/>
                                        <label for="ingredients3">Olive Oil</label><br/>
                                    </div> 
                                    <div class="subcontent">
                                        <input type="checkbox" id="ingredients4" name="ingredients4" value="eggs"/>
                                        <label for="ingredients4">Eggs</label><br/>
                                    </div> 
                                    <div class="subcontent">
                                        <input type="checkbox" id="ingredients5" name="ingredients5" value="garlic"/>
                                        <label for="ingredients5">Garlic</label><br/>
                                    </div>
                                    <div class="subcontent">
                                        <input type="checkbox" id="ingredients6" name="ingredients6" value="onion"/>
                                        <label for="ingredients6">Onion</label><br/>
                                    </div>
                                    <div class="subcontent">
                                        <input type="checkbox" id="ingredients7" name="ingredients7" value="butter"/>
                                        <label for="ingredients7">Butter</label><br/>
                                    </div>
                                    <div class="subcontent">
                                        <input type="checkbox" id="ingredients8" name="ingredients8" value="all-purpose"/>
                                        <label for="ingredients8">All-purpose Flour</label><br/>
                                    </div>
                                    <div class="subcontent">
                                        <input type="checkbox" id="ingredients9" name="ingredients9" value="tomatoes"/>
                                        <label for="ingredients9">Tomatoes</label><br/>
                                    </div>
                                    <div class="subcontent">
                                        <input type="checkbox" id="ingredients10" name="ingredients10" value="gochujang"/>
                                        <label for="ingredients10">Gochujang</label><br/>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div class="filter-button">Filter</div>
                    </div>
                </div>

                <div class="right-container">
                    <h2>Recently Viewed Recipes</h2>
                    <div class="recently-viewed-recipes">
                        <div class="card">
                            <div class="card-image"></div>
                            <div class="card-content">
                                <h3>Recipe Name</h3>
                                <p>@username</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image"></div>
                            <div class="card-content">
                                <h3>Recipe Name</h3>
                                <p>@username</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image"></div>
                            <div class="card-content">
                                <h3>Recipe Name</h3>
                                <p>@username</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image"></div>
                            <div class="card-content">
                                <h3>Recipe Name</h3>
                                <p>@username</p>
                            </div>
                        </div>
                    </div>

                    <h2>Recently Created Cookbooks</h2>
                    <div class="recently-created-cookbooks">
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

                    <h2>Recipes</h2>
                    <div class="recipes">
                        <div class="card">
                            <div class="card-image"></div>
                            <div class="card-content">
                                <h3>Recipe Name</h3>
                                <p>@username</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image"></div>
                            <div class="card-content">
                                <h3>Recipe Name</h3>
                                <p>@username</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image"></div>
                            <div class="card-content">
                                <h3>Recipe Name</h3>
                                <p>@username</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image"></div>
                            <div class="card-content">
                                <h3>Recipe Name</h3>
                                <p>@username</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;