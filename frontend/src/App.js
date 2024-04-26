import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './login-page/login-page';
import SignupPage from './signup-page/signup-page';
import UserProfilePage from './user-profile-page/user-profile-page';
import CookbooksPage from './cookbooks-page/cookbooks-page';
import RecipeDetailsPage from './recipe-details-page/recipe-details-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile/:username" element={<UserProfilePage />} />
        <Route path="/cookbooks" element={<CookbooksPage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;