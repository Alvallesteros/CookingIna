import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './view-cookbooks-page.css';
import Navbar from '../navbar/navbar';

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
            <Navbar/>
            
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