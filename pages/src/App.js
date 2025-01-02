import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup'; 
import Login from './Login'; // Import your login page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Signup" element={<Signup />} /> {/* Signup page route */}
        <Route path="/Login" element={<Login />} /> {/* Login page route */}
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
