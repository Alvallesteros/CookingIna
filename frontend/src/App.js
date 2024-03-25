import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UserProfilePage from './user-profile-page/user-profile-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;