import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './ClaimLinkSignup.css'; // Styling the page


const Signup = () => {
  const [uniqueLink, setUniqueLink] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    // let value = e.target.value; 
    setUniqueLink(e.target.value);
  };
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8003/auth/exists?username=${uniqueLink}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();
      if (res.success) {
        setMessage(`Link ${uniqueLink} successfully claimed!`);
        setTimeout(() => navigate("/create-account"), 1500);
      } else {
        setMessage('Please enter a valid link.');
      }
    } catch (error) {
      setMessage(`Something went wrong: Please come back later.`);
    }
};

  return (
    <div className="signup-container">
    {/* Left Side - Signup Form */}
    <div className="signup-left">
      <h2>First, claim your unique name</h2>
  
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="unique-link"
            name="unique-link"
            value={uniqueLink}
            onChange={handleInputChange}
            placeholder="Enter your unique link here"
            required
          />
        </div>
  
        <div className="form-actions">
          <button type="submit" className="submit-btn" >Grab the link</button>
        </div>
      </form>
  
      {message && <div className="message">{message}</div>}
  
      <div className="redirect-login">
        <p>Already have an account? <a href="/">Login</a></p>
      </div>
    </div>
  
    {/* Right Side - Photos */}
    <div className="signup-right">
      <div className="photos">
      <img src="images/image1.jpg" alt="" />
      </div>
    </div>
  </div>
  
  );
};

export default Signup;