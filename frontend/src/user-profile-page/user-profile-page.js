import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './user-profile-page.css';
import UploadPhoto from './uploadPhoto';
import ConfirmationModal from './confirmation';

const UserProfilePage = () => {

    const { username } = useParams();
    const [profile, setProfile] = useState(null);
    const [editProfile, setEditProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [updatePic, setUpdatePic] = useState(false);
    const location = useLocation();
    const [isCreating, setIsCreating] = useState(false);
    const [user, setUser] = useState(null);
    const [profilePic, setProfilePic] = useState('/default_profpic.png');
    const [confirmModal, setConfirmModal] = useState(false);
    const navigate = useNavigate();
    let picFile;

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

    const fetchProfile = async(username) => {
        try {
            const response = await fetch(`http://localhost:8000/api/profile/${username}/`);
            if(!response.ok) {
                setIsCreating(true);
                toggleEditing();
                throw new Error("Failed to fetch profile");
            }
            const data = await response.json();
            setProfile(data);
            sessionStorage.setItem('username', username);
        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if(!isCreating){
            fetchProfile(username);
        }
    }, [username]);


    if (!profile && !isCreating) {
        return <div>Loading...</div>;
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
        picFile = selectedFile;
    };

    const handleProfilePicClick = () => {
        document.getElementById('fileInput').click();
    };

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

    const createNewProfile = async () => {
        try {
            const userResponse = await fetch(`http://localhost:8000/api/search-user/${username}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (!userResponse.ok) {
                throw new Error('Failed to fetch user data');
            }
            const userData = await userResponse.json();
            
            setUser(userData);
            console.log(userData);
    
            const profileData = new FormData();
            profileData.append('first_name', document.getElementById('first_name').value);
            profileData.append('last_name', document.getElementById('last_name').value);
            profileData.append('mobile_number', document.getElementById('mobile_number').value);
            profileData.append('birthday', document.getElementById('birthday').value);
            profileData.append('biography', document.getElementById('biography').value);
            profileData.append('user', userData.user_id);
    
            const profilePictureInput = document.getElementById('profile_picture');
            if (profilePictureInput.files.length > 0) {
                profileData.append('profile_picture', profilePictureInput.files[0]);
            }
    
            const response = await fetch(`http://localhost:8000/api/profile/create/`, {
                method: 'POST',
                body: profileData,
            });
    
            if (response.ok) {
                window.location.reload();
            } else {
                throw new Error('Failed to save changes: ' + response.statusText);
            }
        } catch (error) {
            console.error('Error while creating profile:', error.message);
        }
    };
    
    
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/profile/${username}/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (response.ok) {
                console.log('Profile deleted successfully');
            } else {
                console.error('Failed to delete profile:', response.statusText);
            }
        } catch (error) {
            console.error('Error while deleting profile:', error.message);
        }
        navigate('/login')
        
    };

    return (
            <div className="profile bg">
                <UploadPhoto
                    updatePic={updatePic}
                    setUpdatePic={setUpdatePic}
                    handleUpload={handleUpload}
                    username={username}
                />
                <ConfirmationModal
                    isOpen={confirmModal}
                    message="Are you sure you want to delete?"
                    onCancel={() => setConfirmModal(false)}
                    onConfirm={handleDelete}
                />
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

                <div className="profile red-rectangle"></div>

                <div className="profile user-image-container">
                        {isCreating ? (
                        <div className='profile pic-container'>
                            <input
                                type="file"
                                id="profile_picture"
                                accept="image/*"
                                onChange={handleFileChange}
                                style={{ display: 'block', opacity: 0, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, cursor: 'pointer' }}
                            />
                            <div
                                className="profile user-image"
                                style={{ backgroundImage: `url(${profilePic})` }}
                                onClick={handleProfilePicClick}
                            ></div>
                        </div>
                    ) : (
                        <div className="profile user-image" onClick={() => setUpdatePic(true)} style={{ backgroundImage: profile && profile.profile_picture ? `url(${profile.profile_picture})` : '/default_profpic.png' }}></div>
                    )}
                </div>

                <div className="profile main-container">
                    {!isCreating && (
                        <div className="profile details-top">
                            <div className="profile user-name-username">
                                <h1>{ profile.first_name } { profile.last_name }</h1>
                                <h3>@{ username }</h3>
                                <p>{ profile.biography }</p>
                            </div>
                            {!isEditing && <div className="profile button" onClick={toggleEditing}>Edit Profile</div>}
                        </div>
                    )}
                    {isEditing && (
                        <div className='profile edit'>
                            <div className="profile details-middle">
                                <div className="profile general-info">
                                    <h1>General Information</h1>
                                    <label htmlFor="first_name">First Name</label>
                                    <input type="text" id="first_name" name="first_name" maxLength="32" defaultValue={editProfile && editProfile.first_name ? editProfile.first_name : ''} onChange={handleInputChange} required/><br/>
                                    <label htmlFor="last_name">Last Name</label>
                                    <input type="text" id="last_name" name="last_name" maxLength="32" defaultValue={editProfile && editProfile.last_name ? editProfile.last_name : ''} onChange={handleInputChange} required/><br/>
                                    <label htmlFor="mobile_number">Mobile Number</label>
                                    <input type="text" id="mobile_number" name="mobile_number" maxLength="32" defaultValue={editProfile && editProfile.mobile_number ? editProfile.mobile_number : ''} onChange={handleInputChange} required/><br/>
                                    <label htmlFor="birthday">Birthdate</label>
                                    <input type="text" id="birthday" name="birthday" maxLength="32" defaultValue={editProfile && editProfile.birthday ? editProfile.birthday : ''} onChange={handleInputChange} required/><br/>
                                    <div className="profile button" onClick={profile ? handleSaveChanges : createNewProfile}>Save Changes</div>
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
                                    <textarea type="text" id="biography" name="biography" maxLength="250" defaultValue={editProfile && editProfile.biography ? editProfile.biography : ''} onChange={handleInputChange} required/>
                                    <div className="profile button" onClick={profile ? handleSaveChanges : createNewProfile}>Save Changes</div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="profile account-management">
                                <h1>Account Management</h1>
                                <h3>If you would like to delete your account and personal data associated with it, click the button below.</h3>
                                <div className="profile button" onClick={() => setConfirmModal(true)}>Delete My Account</div>
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