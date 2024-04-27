import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './login-page/login-page';
import SignupPage from './signup-page/signup-page';
import UserProfilePage from './user-profile-page/user-profile-page';
import DashboardPage from './dashboard-page/dashboard-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile/:username" element={<UserProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;