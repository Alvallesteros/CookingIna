import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './view-cookbooks-page.css';

const ViewCookbooksPage = () => {
    const [cookbooks, setCookbooks] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/cookbooks');
          const data = await response.json();
          setCookbooks(data);
        } catch (error) {
          console.error('Error fetching cookbooks:', error);
        }
      };
  
      fetchData();
    }, []);

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
                    {cookbooks.map((cookbook) => (
                        <div className="card" key={cookbook.id}> {/* Add a unique key */}
                            <div className="card-image"></div>
                            <div className="card-content">
                                <h3>{cookbook.name}</h3> {/* Access data from the fetched object */}
                                <p>@{cookbook.username}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ViewCookbooksPage;