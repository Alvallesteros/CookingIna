import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './user-profile-page.css';

const UserProfilePage = () => {

    const { username } = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetchProfile(username);
    }, [username]);

    const fetchProfile = async(username) => {
        try {
            const response = await fetch(`http://localhost:8000/api/profile/${username}/`);
            if(!response.ok) {
                throw new Error("Failed to fetch profile");
            }
            const data = await response.json();
            setProfile(data);
        } catch(error) {
            console.error(error);
        }
    };

    if (!profile) {
        return <div>Loading...</div>;
    }

    console.log(profile)

    return (
            <div className="profile bg">
                <nav className="profile navbar">
                    <div className="profile logo-container">
                        <img alt="Logo" src="/Logo.svg"className="profile logo" />
                        <span className="profile logo-text">CookingIna</span>
                    </div>
                    <ul className="profile navbar-ul">
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

                <div className="profile red-rectangle"></div>

                <div className="profile user-image-container">
                    <div className="profile user-image" style={{ backgroundImage: `url(${profile.profile_picture})` }}>
                    </div>
                </div>

                <div className="profile main-container">
                    <div className="profile details-top">
                        <div className="profile user-name-username">
                            <h1>{ profile.first_name } { profile.last_name }</h1>
                            <h3>@{ username }</h3>
                            <p>{ profile.biography }</p>
                        </div>

                        <div className="profile button">Edit Profile</div>
                    </div>
                    <div className='hidden profile edit'>
                        <div className="profile details-middle">
                            <div className="profile general-info">
                                <h1>General Information</h1>
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" name="first-name" maxLength="10"/><br/>
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id="last-name" name="last-name" maxLength="10"/><br/>
                                <label htmlFor="mobile-number">Mobile Number</label>
                                <input type="text" id="mobile-number" name="mobile-number" maxLength="12"/><br/>
                                <label htmlFor="birthdate">Birthdate</label>
                                <input type="text" id="birthdate" name="birthdate" maxLength="10"/><br/>
                                <div className="profile button">Save Changes</div>
                            </div>

                            <div className="profile user-credentials">
                                <h1>User Credentials</h1>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" maxLength="20"/><br/>
                                <div className="profile button">Verify Email</div><br/>
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="username" maxLength="20"/><br/>
                                <label htmlFor="password">Password</label>
                                <input type="text" id="password" name="password" maxLength="20"/><br/>
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input type="text" id="confirm-password" name="confirm-password" maxLength="20"/><br/>
                                <div className="profile button">Save Changes</div>
                            </div>  
                        </div>

                        <div className="profile details-bottom">
                            <div className="profile biography">
                                <h1>Biography</h1>
                                <input type="text" id="biography" name="biography" maxLength="100"/>
                                <div className="profile button">Save Changes</div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden profile account-management">
                                <h1>Account Management</h1>
                                <h3>If you would like to delete your account and personal data associated with it, click the button below.</h3>
                                <div className="profile button">Delete My Account</div>
                        </div>
                </div>
            
            <div className='profile recipe-container'>
                <div className="profile favorite-recipes-text">
                    <img alt="Star" className="profile star-icon"/>
                    <h1>Favorite Recipes</h1>
                </div>

                <div className="hidden profile recipe-cards-container">
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                </div>

                <div className="profile created-recipes-text">
                    <img alt="Spatula" className="profile spatula-icon"/>
                    <h1>Created Recipes</h1>
                </div>

                <div className="hidden profile recipe-cards-container">
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                    <div className="profile card">
                        <div className="profile card-image"></div>
                        <div className="profile card-content">
                            <h3>Recipe Name</h3>
                            <p>@username</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;