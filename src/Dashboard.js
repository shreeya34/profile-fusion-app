import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import "./Dashboard.css";

const Dashboard = () => {
  const [description, setDescription] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const location = useLocation();  // use the useLocation hook
  const { firstName, lastName } = location.state || { firstName: "", lastName: "" };  // Fallback if no state is passed

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Back Arrow */}
      <div className="back-arrow">
        <button onClick={() => window.history.back()}>&larr; Back</button>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        {/* Profile Picture */}
        <div className="profile-pic">
          {profilePic ? (
            <img src={profilePic} alt="Profile" />
          ) : (
            <div className="placeholder">Upload Photo</div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="upload-input"
          />
        </div>

        {/* Display Full Name */}
        <h2>
          {firstName} {lastName}
        </h2>

        {/* Description */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add your description here..."
          className="description-input"
        />
      </div>
    </div>
  );
};

export default Dashboard;
