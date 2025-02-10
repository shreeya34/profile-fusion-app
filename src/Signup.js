import React, { useState } from 'react';
import './ClaimLinkSignup.css'; // Styling the page

const Signup = () => {
  const [uniqueLink, setUniqueLink] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // let value = e.target.value; 
    setUniqueLink(e.target.value);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch(`http://127.0.0.1:8000/auth/exists?username=${uniqueLink}`)
      const res = await response.json();
      if(res.success) {
        setMessage(`Link ${uniqueLink} successfully claimed!`);
        return true;
      }
      setMessage('Please enter a valid link.');
      return true;
    }catch(error) {
       setMessage(`Something went wrong: Please comeback after sometime. ${error}`);
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
      <img src="images/image1.jpg" alt=" Image" />
      </div>
    </div>
  </div>
  
  );
};

export default Signup;
