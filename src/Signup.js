import React, { useState } from 'react';
import './ClaimLinkSignup.css'; // Styling the page

const Signup = () => {
  const [uniqueLink, setUniqueLink] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setUniqueLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just displaying the unique link. You can replace this logic with API call or any functionality.
    if (uniqueLink) {
      setMessage(`Link ${uniqueLink} success fully claimed!`);
    } else {
      setMessage('Please enter a valid link.');
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
          <button type="submit" className="submit-btn">Grab the link</button>
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
        <img src="https://via.placeholder.com/300" alt="Placeholder 1" />
        <img src="https://via.placeholder.com/300" alt="Placeholder 2" />
      </div>
    </div>
  </div>
  
  );
};

export default Signup;
