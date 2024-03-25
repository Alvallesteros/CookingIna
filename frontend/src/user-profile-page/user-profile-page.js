import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './user-profile-page.css';

const UserProfilePage = () => {


    return (
        <div>
            <div className="bg">
                <nav className="navbar">
                    <div className="logo-container">
                        <img alt="Logo" className="logo" />
                        <span className="logo-text">CookingIna</span>
                    </div>
                    <ul cclassNamelass="navbar-ul">
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

                <div clclassNameass="red-rectangle"></div>

                <div className="user-image-container">
                    <div className="user-image"></div>
                </div>

                <div className="main-container">
                    <div className="details-top">

                        <div className="user-name-username">
                            <h1>FirstName LastName</h1>
                            <h3>@username</h3>
                        </div>

                        <div className="button">Edit Profile</div>
                    </div>

                    <div className="details-middle">
                        <div className = "general-info">
                            <h1>General Information</h1>
                            <label for="first-name">First Name</label>
                            <input type="text" id="first-name" name="first-name" maxlength="10"/><br/>
                            <label for="last-name">Last Name</label>
                            <input type="text" id="last-name" name="last-name" maxlength="10"/><br/>
                            <label for="mobile-number">Mobile Number</label>
                            <input type="text" id="mobile-number" name="mobile-number" maxlength="12"/><br/>
                            <label for="birthdate">Birthdate</label>
                            <input type="text" id="birthdate" name="birthdate" maxlength="10"/><br/>
                            <div class="button">Save Changes</div>
                        </div>

                        <div className = "user-credentials">
                            <h1>User Credentials</h1>
                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" maxlength="20"/><br/>
                            <div class="button">Verify Email</div><br/>
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" maxlength="20"/><br/>
                            <label for="password">Password</label>
                            <input type="text" id="password" name="password" maxlength="20"/><br/>
                            <label for="confirm-password">Confirm Password</label>
                            <input type="text" id="confirm-password" name="confirm-password" maxlength="20"/><br/>
                            <div class="button">Save Changes</div>
                        </div>  
                    </div>

                    <div className="details-bottom">
                        <div className="biography">
                            <h1>Biography</h1>
                            <input type="text" id="biography" name="biography" maxlength="100"/>
                            <div className="button">Save Changes</div>
                        </div>
        
                        <div className="account-management">
                            <h1>Account Management</h1>
                            <h3>If you would like to delete your account and personal data associated with it, click the button below.</h3>
                            <div className="button">Delete My Account</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="favorite-recipes-text">
                <img alt="Star" className="star-icon"/>
                <h1>Favorite Recipes</h1>
            </div>

            <div className="recipe-cards-container">
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

            <div className="created-recipes-text">
                <img alt="Spatula" className="spatula-icon"/>
                <h1>Created Recipes</h1>
            </div>

            <div className="recipe-cards-container">
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
    );
};

export default UserProfilePage;