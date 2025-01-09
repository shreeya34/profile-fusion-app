import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [description, setDescription] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const location = useLocation();
  const { firstName, lastName } = location.state || { firstName: "", lastName: "" };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleShare = () => {
    // Logic for share functionality
    alert("Share button clicked!");
  };

  return (
    <div className="dashboard-container">
      <div className="back-arrow" onClick={() => window.history.back()}>
        &larr;
      </div>

      {/* Share Button */}
      <div className="share-button" onClick={handleShare}>
        <img src="/images/share.png" alt="Download" className="share-icon" />
        <span>Share</span>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
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

        <h2>
          {firstName} {lastName}
        </h2>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add description..."
          className="description-input"
        />
      </div>
    </div>
  );
};

export default Dashboard;
