import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './cookbooks-page.css';
import Navbar from '../navbar/navbar';

const CookbooksPage = () => {

    const navigate = useNavigate();

    

    return  (
        <div className="cookbooks"><div className="bg">
            <Navbar/>

            <div className="banner">
                <div className="cookbook-image-placeholder"></div>
                <h2 className="banner-text">My Cookbooks</h2>
                
                <div className="banner-buttons">
                    <div className="banner-button-a">
                        <a href="#">Create Cookbook</a>
                    </div>
                    <div className="banner-button-b">
                        <a>View All Cookbooks</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="card-container">
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <h3>Cookbook Name</h3>
                            <div className="ellipsis">...
                                <div className="popup">
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Delete Cookbook</a>
                                    </div>
                                    <div className="popup-line">
                                        <div className="popup-icons"></div>
                                        <a href="#">Add Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    );
};

export default CookbooksPage;