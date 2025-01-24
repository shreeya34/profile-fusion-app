import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Ensure this is imported correctly
import './CreateAccount.css'; // Styling the page


const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Add state for error


  const navigate = useNavigate(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    console.log('Submitting form:', { email, password }); // De

    try {
      const response = await fetch('http://localhost:8000/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Account creation failed');
      }

     // Navigate to intro page with email state
     navigate('/intro', { 
      state: { 
        email: email 
      } 
    });
  } catch (err) {
    setError(err.message);
    console.error('Account creation error:', err);
  }
};

  const goBack = () => {
    navigate('/signup');
  };


  return (
    <div className="create-account-container">
      {/* Left Side - Text */}
      <div className="create-account-left">
        {/* Back Button */}
        <div className="back-button" onClick={goBack}>
          <span>&larr;</span> {/* Arrow symbol for the back icon */}
          <span>Back</span>
        </div>

        <h2>Now, Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="form-groups">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="form-groups">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
              />
            </div>
          </div>

          {/* Terms & Conditions Link */}
          <div className="social">
            <h5>By clicking Sign up, you agree to <a href="/terms-and-conditions">Paage's Terms & Conditions</a></h5>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">Signup</button>
          </div>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="create-account-right">
        <img src="https://via.placeholder.com/300" alt="Placeholder" />
      </div>
    </div>
  );
};

export default CreateAccount;
