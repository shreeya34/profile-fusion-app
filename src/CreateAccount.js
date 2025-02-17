import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './CreateAccount.css'; 
 


const CreateAccount = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 


  const navigate = useNavigate(); 
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
     
     const generatedUsername = email.split('@')[0] || `user_${Date.now()}`;
    try{
      const response = await fetch(`http://127.0.0.1:8000/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: generatedUsername,
          email: email,
          password: password
        })
      });
      const res = await response.json();
      if (response.ok && res.success) {
        setMessage(res.message || "Account created successfully!");
        setTimeout(() => navigate("/intro"), 1500);
      } else {
        setMessage(res.message || "Account creation failed");
      }
    } catch (error) {
      setMessage(`Account creation error: ${error.message}`);
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
        {message && <div className="message">{message}</div>}
      </div>
   

      {/* Right Side - Image */}
      <div className="create-account-right">
      <div className="photos">
        <img src="images/image4.jpg" alt="" />
      </div>
    </div>
    </div>
  );
};

export default CreateAccount;
