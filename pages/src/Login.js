import React from 'react';
import './Login.css';

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
            <button type="submit">Login</button>
            <div className="reset-password">
              <a href="/reset-password">Forgot Password?</a>
            </div>
          </form>
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
