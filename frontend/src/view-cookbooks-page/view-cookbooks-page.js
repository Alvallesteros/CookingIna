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
    const username = sessionStorage.getItem('username');
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