import React, { useState } from 'react';
import './CreateAccount.css'; // Styling the page

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating account with:', email, password);
  };

  return (
    <div className="create-account-container">
      {/* Left Side - Text */}
      <div className="create-account-left">
        <h2>Now, Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="form-group">
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

            <div className="form-group">
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
