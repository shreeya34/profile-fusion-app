import React from 'react';
import './AuthLayout.css';

const AuthLayout = ({ leftContent, rightImages }) => {
  return (
    <div className="auth-container">
      {/* Left Side - Customizable Content */}
      <div className="auth-left">{leftContent}</div>

      {/* Right Side - Images */}
      <div className="auth-right">
        <div className="photos">
          {rightImages.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={`Placeholder ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
