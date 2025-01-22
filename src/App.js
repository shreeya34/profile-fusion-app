import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup'; 
import Login from './Login'; // Import your login page component
import CreateAccount from './CreateAccount';
import Intro from './Intro';
import Dashboard from './Dashboard';
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Signup" element={<Signup />} /> {/* Signup page route */}
        <Route path="/" element={<Login />} /> {/* Login page route */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
