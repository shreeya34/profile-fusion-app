import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      {/* Left Side - Login Form */}
      <div className="login-left">
        <div>
          <h2>Login to your Pages</h2>
          <form>
            <div className="flex-container">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="reset-password">
              <a href="/reset-password">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            
          </form>
          
          <div className="or-divider">
            <hr />
            <span>OR</span>

            <hr />
           
          </div>

          <div className="social">
            <h5>Sign in with</h5>
            </div>

          <div className="social-login">
            <button className="social-button google-login">
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" />
            </button>
            <button className="social-button facebook-login">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" />
            </button>
          </div>
          <div className="signup-link">
            <p>
            Don’t have an account? <Link to="/signup">Sign up</Link> 
            </p>
          </div>
        </div>
      </div>


      {/* Right Side - Photos */}
      <div className="login-right">
        <div className="photos">
          <img src="https://via.placeholder.com/300" alt="Placeholder 1" />
          <img src="https://via.placeholder.com/300" alt="Placeholder 2" />
        </div>
      </div>
    </div>
  );
};

export default Login;
