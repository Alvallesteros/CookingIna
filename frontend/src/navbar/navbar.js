import React, { useState } from 'react';
import './navbar.css'; // Import your CSS file

function Navbar() {
  // State variables to manage dropdown visibility
  const [recipesDropdownOpen, setRecipesDropdownOpen] = useState(false);
  const [cookbooksDropdownOpen, setCookbooksDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // Functions to toggle the dropdowns
  const toggleRecipesDropdown = () => setRecipesDropdownOpen(!recipesDropdownOpen);
  const toggleCookbooksDropdown = () => setCookbooksDropdownOpen(!cookbooksDropdownOpen);
  const toggleProfileDropdown = () => setProfileDropdownOpen(!profileDropdownOpen);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img alt="Logo" className="logo" src="your-logo-image.png" /> {/* Add image source */}
        <span className="logo-text">CookingIna</span>
      </div>

      <div className="navbar-links">
        <div className="navbar-home">
          <a href="#">Home</a>
        </div>

        {/* Recipes Dropdown */}
        <div className="navbar-recipes"
             onMouseEnter={toggleRecipesDropdown} 
             onMouseLeave={toggleRecipesDropdown}
        >
          <a href="#">Recipes</a>
          <div className={`dropdown ${recipesDropdownOpen ? 'open' : ''}`}> 
            <div className="dropdown-entry-1">
              <a href="#">View Own Recipes</a>
            </div>
            <div className="dropdown-entry-2">
              <a href="#">Create Recipe</a>
            </div>
          </div>
        </div>

        {/* Cookbooks Dropdown (Similar to Recipes) */}
        <div className="navbar-cookbooks" 
             onMouseEnter={toggleCookbooksDropdown} 
             onMouseLeave={toggleCookbooksDropdown}
        >
          <a href="#">Cookbooks</a>
          <div className={`dropdown ${cookbooksDropdownOpen ? 'open' : ''}`}>
            <div className="dropdown-entry-1">
                <a href="#">View Cookbooks</a>
                </div>
            <div className="dropdown-entry-2">
                <a href="#">Create Cookbooks</a>
            </div>
          </div>
        </div>

        {/* Profile Dropdown (Similar to Recipes) */}
        <div className="navbar-profile" 
             onMouseEnter={toggleProfileDropdown} 
             onMouseLeave={toggleProfileDropdown}
        >
          <a href="#">Profile</a>
          <div className={`dropdown ${profileDropdownOpen ? 'open' : ''}`}>
            <div className="dropdown-entry-1">
              <a href="#">My Profile</a>
            </div>
            <div className="dropdown-entry-2">
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
