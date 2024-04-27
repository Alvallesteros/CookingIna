import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './login-page/login-page';
import SignupPage from './signup-page/signup-page';
import UserProfilePage from './user-profile-page/user-profile-page';
import CookbooksPage from './cookbooks-page/cookbooks-page';
import RecipeDetailsPage from './recipe-details-page/recipe-details-page';
import ViewRecipesPage from './view-recipes-page/view-recipes-page';
import CreateRecipePage from './create-recipe-page/create-recipe-page';
import DashboardPage from './dashboard-page/dashboard-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile/:username" element={<UserProfilePage />} />
        <Route path="/cookbooks" element={<CookbooksPage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
        <Route path="/create-recipe" element={<CreateRecipePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="recipe" element={<ViewRecipesPage/>} />
      </Routes>
    </Router>
  );
};

export default App;