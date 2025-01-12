import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [description, setDescription] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  
  const [activeCard, setActiveCard] = useState(""); 


  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    website: "",
    linkedin: "",
    spotify: "",
    tiktok: "",
    github: "",
    email: "",
  });

  const location = useLocation();
  const { firstName, lastName } = location.state || { firstName: "", lastName: "" };

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle social link changes
  const handleSocialLinkChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({ ...prevLinks, [name]: value }));
  };

  // Save social links
  const handleSaveSocialLinks = () => {
    alert("Social links saved!");
    // You can send the socialLinks state to a backend here
    console.log(socialLinks);
  };

  
  return (
    <div className="dashboard-container">
      {/* Back Arrow */}
      <div className="back-arrow" onClick={() => window.history.back()}>
        &larr;
      </div>

      {/* Share Button */}
      <div className="share-button" onClick={() => alert("Share button clicked!")}>
        <img src="/images/share.png" alt="Share" className="share-icon" />
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

        {/* Description Input */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add description..."
          className="description-input"
        />

        {/* Plus Sign Inside Dotted Circle */}
        <div className="description-plus-container">
          <div
            className="dotted-circle"
            onClick={() => setShowSocialLinks((prevState) => !prevState)}
          >
            <span className="plus-sign">+</span>
          </div>
        </div>

        {/* Social Links */}
        {showSocialLinks && (
          <div className="social-links-box">
            <button
              className="close-button"
              onClick={() => setShowSocialLinks(false)}
            >
              &times;
            </button>
            <h3 className="social-links-title">Add Your Social Links</h3>
            <div className="social-links">
              {/* Facebook */}
              <div className="social-link">
                <img
                  src="/images/facebook.webp"
                  alt="Facebook"
                  className="social-icon"
                />
                <input
                  type="text"
                  name="facebook"
                  value={socialLinks.facebook}
                  onChange={handleSocialLinkChange}
                  placeholder="Facebook URL"
                  className="social-link-input"
                />
              </div>

              {/* Twitter */}
              <div className="social-link">
                <img
                  src="/images/twitter.png"
                  alt="Twitter"
                  className="social-icon"
                />
                <input
                  type="text"
                  name="twitter"
                  value={socialLinks.twitter}
                  onChange={handleSocialLinkChange}
                  placeholder="Twitter URL"
                  className="social-link-input"
                />
              </div>

              {/* Instagram */}
              <div className="social-link">
                <img
                  src="/images/instagram.jpg"
                  alt="Instagram"
                  className="social-icon"
                />
                <input
                  type="text"
                  name="instagram"
                  value={socialLinks.instagram}
                  onChange={handleSocialLinkChange}
                  placeholder="Instagram URL"
                  className="social-link-input"
                />
              </div>

              {/* Website */}
              <div className="social-link">
                <img
                  src="/images/website.jpg"
                  alt="Website"
                  className="social-icon"
                />
                <input
                  type="text"
                  name="website"
                  value={socialLinks.website}
                  onChange={handleSocialLinkChange}
                  placeholder="Website URL"
                  className="social-link-input"
                />
              </div>

              {/* LinkedIn */}
              <div className="social-link">
                <img
                  src="/images/linkdin.webp"
                  alt="LinkedIn"
                  className="social-icon"
                />
                <input
                  type="text"
                  name="linkedin"
                  value={socialLinks.linkedin}
                  onChange={handleSocialLinkChange}
                  placeholder="LinkedIn URL"
                  className="social-link-input"
                />
              </div>

              {/* Spotify */}
              <div className="social-link">
                <img
                  src="/images/spotify.png"
                  alt="Spotify"
                  className="social-icon"
                />
                <input
                  type="text"
                  name="spotify"
                  value={socialLinks.spotify}
                  onChange={handleSocialLinkChange}
                  placeholder="Spotify URL"
                  className="social-link-input"
                />
              </div>

              {/* TikTok */}
              <div className="social-link">
                <img
                  src="/images/tiktok.png"
                  alt="TikTok"
                  className="social-icon"
                />
                <input
                  type="text"
                  name="tiktok"
                  value={socialLinks.tiktok}
                  onChange={handleSocialLinkChange}
                  placeholder="TikTok URL"
                  className="social-link-input"
                />
              </div>

              {/* GitHub */}
              <div className="social-link">
                <img
                  src="/images/github.svg"
                  alt="GitHub"
                  className="social-icon"
                />
                <input
                  type="text"
                  name="github"
                  value={socialLinks.github}
                  onChange={handleSocialLinkChange}
                  placeholder="GitHub URL"
                  className="social-link-input"
                />
              </div>

              {/* Email */}
              <div className="social-link">
                <img
                  src="/images/email.webp"
                  alt="Email"
                  className="social-icon"
                />
                <input
                  type="text"
                  name="email"
                  value={socialLinks.email}
                  onChange={handleSocialLinkChange}
                  placeholder="Email"
                  className="social-link-input"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="save-button-container">
              <button className="save-button" onClick={handleSaveSocialLinks}>
                Save
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="cards-container">
      {/* Links Card */}
      <div
        className={`card ${activeCard === "links" ? "active" : ""}`}
        onClick={() => setActiveCard("links")}
      >
        <div className="card-content">
          <h3 className="card-title">Links</h3>
        </div>
      </div>

      {/* Store Card */}
      <div
        className={`card ${activeCard === "store" ? "active" : ""}`}
        onClick={() => setActiveCard("store")}
      >
        <div className="card-content">
          {/* Manage/Edit Page Logo */}
          <div className="logo">
            <img
              src="/path-to-your-logo.png" // Replace with the actual path to your logo
              alt="Manage/Edit Page"
              className="manage-logo"
            />
            <span className="logo-text">Manage/Edit Page</span>
          </div>
          <h3 className="card-title">Store</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;