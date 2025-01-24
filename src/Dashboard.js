import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import Switch from 'react-switch';



const Dashboard = () => {
  const [description, setDescription] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [activeCard, setActiveCard] = useState(""); // State for active card
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [isLinksOn, setIsLinksOn] = useState(false);  // Links toggle state
  const [isStoreOn, setIsStoreOn] = useState(false);  // Store toggle state
  const [pageName, setPageName] = useState("");
  const [isRenameBoxVisible, setIsRenameBoxVisible] = useState(false);
  const [checked, setChecked] = useState(false);






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
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
 
  // Handle social link changes
  const handleSocialLinkChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({ ...prevLinks, [name]: value }));
  };
  const handlePageRename = () => {
    if (pageName.trim()) {
      console.log(`Page renamed to: ${pageName}`);
      setIsRenameBoxVisible(false);
      setPageName("");
    }
  };

  // Save social links
  const handleSaveSocialLinks = () => {
    alert("Social links saved!");
    // You can send the socialLinks state to a backend here
    console.log(socialLinks);
  };
    // Function to handle card click to set active card
    const handleCardClick = (card) => {
      setActiveCard(card);
      if (card === "store") {
        // Only toggle box visibility when clicking store
        setIsBoxVisible(!isBoxVisible);
      }
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

      {/* Cards Container */}
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
          onClick={() => handleCardClick("store")}  
        >
          <div className="card-content">
            <h3 className="card-title">Store</h3>
          </div>
          <div className="manage-logo-wrapper">
            <div
              className="manage-logo-circle"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the card click
                setIsBoxVisible(!isBoxVisible); // Toggle visibility of box on icon click
              }}
            >
            <i className="fa-regular fa-pen-to-square"></i>
            </div>
          </div>
        </div>
      </div>
      {isBoxVisible && (
        <div className="large-box">
          {/* Header Section */}
          <div className="box-header">
            <h3>Edit Pages</h3>
            <div
              className="close-icon"
              onClick={() => setIsBoxVisible(false)} // Close the box
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          {/* Links Section */}
          <div className="small-box">
            <div className="icon-wrapper">
              <i className="fa-solid fa-link"></i> {/* Link Icon */}
            </div>
            <h3>Links</h3>
            <div className="toggle-wrapper">
              {/* Edit Button for Links */}
              <i
                className="fa-regular fa-pen-to-square edit-icon links-edit-icon"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent unintended parent clicks
                  alert("Edit Links clicked!");
                }}
              ></i>
              {/* Toggle for Links */}
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isLinksOn}
                  onChange={() => setIsLinksOn(!isLinksOn)}
                />
                <span className="slider"></span>
              </label>
              <span className="status">{isLinksOn ? "Enabled" : "Disabled"}</span>
            </div>
          </div>

          <div className="small-box">
        <div className="icon-wrapper">
          <i className="fa-solid fa-store"></i> {/* Store Icon */}
        </div>
        <h3>Store</h3>
        <div className="toggle-wrapper">
          {/* Edit Button for Store */}
          <i
            className="fa-regular fa-pen-to-square edit-icon store-edit-icon"
            onClick={(e) => {
              e.stopPropagation(); // Prevent unintended parent clicks
              setIsRenameBoxVisible(true); // Open the Rename Box
            }}
          ></i>
          {/* Toggle for Store */}
          <label className="switch">
            <input
              type="checkbox"
              checked={isStoreOn}
              onChange={() => setIsStoreOn(!isStoreOn)}
            />
            <span className="slider"></span>
          </label>
          <span className="status">{isStoreOn ? "Enabled" : "Disabled"}</span>
        </div>
      </div>
      </div>
      )}

      {/* Rename Page Modal */}
      {isRenameBoxVisible && (
        <div className="rename-box">
          <div className="box-header">
            <h3>Rename Page</h3>
            <div
              className="close-icon"
              onClick={() => setIsRenameBoxVisible(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="box-body">
            <label htmlFor="rename-input">New Page Name:</label>
            <input
              type="text"
              id="rename-input"
              value={pageName}
              onChange={(e) => setPageName(e.target.value)}
              placeholder="Enter new page name"
              className="rename-input"
            />
            <button className="save-button" onClick={handlePageRename}>
              Save
            </button>
          </div>
        </div>
      )}


      <div className="rectangle-box">
        <a href="ab" className="icon-link">
          <i className="fa-solid fa-link icon"></i> 
        </a>
        <a href="vv" className="text-icon">
          <i class="fa-solid fa-t"></i>        
        </a> 
        <a href="v" className="plus-icon">
          <i class="fa-solid fa-plus"></i>
        </a>
        <div className="vertical-line"></div>
        <a href="vs" className="mobile-icon">
          <i class="fa-solid fa-mobile"></i>
        </a>
        <a href="vd" className="desktop-icon">
            <i class="fa-solid fa-desktop"></i>
        </a>
        <div className="switch-box">
        <label>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
        />
      </label>
     
    </div>
      </div>
      </div>
      
    );
  };

export default Dashboard;