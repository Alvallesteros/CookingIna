import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './user-profile-page.css';
import UploadPhoto from './uploadPhoto';

const UserProfilePage = () => {

    const { username } = useParams();
    const [profile, setProfile] = useState(null);
    const [editProfile, setEditProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [updatePic, setUpdatePic] = useState(false);

    const handleUpload = async (file) => {
        try {
            const formData = new FormData();
            // Append other fields along with the file
            formData.append('profile_picture', file);
            formData.append('first_name', profile.first_name);
            formData.append('last_name', profile.last_name);
            formData.append('mobile_number', profile.mobile_number);
            formData.append('birthday', profile.birthday);
            formData.append('biography', profile.biography);
            formData.append('user', profile.user);
            // Make a PUT request to upload the file along with other fields
            const response = await fetch(`http://localhost:8000/api/profile/${username}/update`, {
                method: 'PUT',
                body: formData,
            });
            if (response.ok) {
                console.log('Profile updated successfully.');
                fetchProfile(username);
            } else {
                console.error('Failed to update profile:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating profile:', error.message);
        }
    };


    const toggleEditing = () => {
        setIsEditing(!isEditing);
        setEditProfile(JSON.parse(JSON.stringify(profile)));
    };

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditProfile(prevEditProfile => ({
            ...prevEditProfile,
            [name]: value
        }));
    };

    const handleSaveChanges = async() => {
        try {
            const response = await fetch(`http://localhost:8000/api/profile/${username}/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: document.getElementById('first_name').value,
                    last_name: document.getElementById('last_name').value,
                    mobile_number: document.getElementById('mobile_number').value,
                    birthday: document.getElementById('birthday').value,
                    biography: document.getElementById('biography').value,
                    user: profile.user
                    // Add other fields as needed
                }),
            });
            if (response.ok) {
                // Refresh the page upon successful submission
                window.location.reload();
            } else {
                console.error('Failed to save changes:', response.statusText);
            }
        } catch (error) {
            console.error('Error while saving changes:', error.message);
        }
    };

    return (
            <div className="profile bg">
                <UploadPhoto
                    updatePic={updatePic}
                    setUpdatePic={setUpdatePic}
                    handleUpload={handleUpload}
                    username={username}
                />
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
                    <div className="profile user-image" onClick={() => setUpdatePic(true)} style={{ backgroundImage: `url(${profile.profile_picture})` }}>
                    </div>
                </div>

                <div className="profile main-container">
                    <div className="profile details-top">
                        <div className="profile user-name-username">
                            <h1>{ profile.first_name } { profile.last_name }</h1>
                            <h3>@{ username }</h3>
                            <p>{ profile.biography }</p>
                        </div>
                        {!isEditing && <div className="profile button" onClick={toggleEditing}>Edit Profile</div>}
                    </div>
                    {isEditing && (
                        <div className='profile edit'>
                            <div className="profile details-middle">
                                <div className="profile general-info">
                                    <h1>General Information</h1>
                                    <label htmlFor="first_name">First Name</label>
                                    <input type="text" id="first_name" name="first_name" maxLength="32" defaultValue={editProfile.first_name} onChange={handleInputChange} required/><br/>
                                    <label htmlFor="last_name">Last Name</label>
                                    <input type="text" id="last_name" name="last_name" maxLength="32" defaultValue={editProfile.last_name} onChange={handleInputChange} required/><br/>
                                    <label htmlFor="mobile_number">Mobile Number</label>
                                    <input type="text" id="mobile_number" name="mobile_number" maxLength="32" defaultValue={editProfile.mobile_number} onChange={handleInputChange} required/><br/>
                                    <label htmlFor="birthday">Birthdate</label>
                                    <input type="text" id="birthday" name="birthday" maxLength="32" defaultValue={editProfile.birthday} onChange={handleInputChange} required/><br/>
                                    <div className="profile button" onClick={handleSaveChanges}>Save Changes</div>
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
                                    <textarea type="text" id="biography" name="biography" maxLength="250" defaultValue={editProfile.biography} onChange={handleInputChange} required/>
                                    <div className="profile button" onClick={handleSaveChanges}>Save Changes</div>
                                </div>
                            </div>
                        </div>
                    )}
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