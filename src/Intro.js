import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Intro.css"; // Import your custom styles

const Intro = () => {
  const [step, setStep] = useState(1); // Track the current step
  const totalSteps = 5; // Total number of steps (updated to 5)
  const navigate = useNavigate(); // Use navigate for routing

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    pageOption: "",
    theme: "",
    socials: {
      instagram: "",
      linkedin: "",
      facebook: "",
      twitter: "",
      snapchat: "",
      pinterest: "",
      email: "",
      phone: "",
      website: "",
      github: "",
    },
    links: [], // Store added links here
    newLink: "", // Store new link input
  });

  const platforms = [
    "instagram",
    "linkedin",
    "facebook",
    "twitter",
    "snapchat",
    "pinterest",
    "email",
    "phone",
    "website",
    "github",
    "medium",
    "tiktok",
    "spotify",
  ];

  const logoMap = {
    instagram: "/images/instagram.jpg",
    linkedin: "/images/linkdin.webp",
    facebook: "/images/facebook.webp",
    twitter: "/images/twitter.png",
    snapchat: "/images/image.webp",
    pinterest: "/images/pintrest.webp",
    email: "/images/email.webp",
    phone: "/images/phone.png",
    website: "/images/website.jpg",
    github: "/images/github.svg",
    medium: "/images/medium.png",
    tiktok: "/images/tiktok.png",
    spotify: "/images/spotify.png",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      if (["firstName", "lastName", "pageOption", "theme"].includes(name)) {
        return { ...prevData, [name]: value };
      }
      if (name === "newLink") {
        return { ...prevData, newLink: value };
      }
      if (name in prevData.socials) {
        return {
          ...prevData,
          socials: { ...prevData.socials, [name]: value },
        };
      }
      return prevData;
    });
  };

  const pasteLink = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setFormData((prevData) => ({
        ...prevData,
        newLink: clipboardText,
      }));
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  const handleFinish = async () => {
    const payload = {
      first_name: "John",
      last_name: "Doe",
      social_links: { github: "https://github.com/johndoe" },
      website_link: "https://example.com"
    };
  
    const userId = 123; 
    try {
      const response = await fetch(`http://127.0.0.1:8000/profiles/profile?user_id=${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }
  
      const result = await response.json();
      console.log("Success:", result);
  
      // Navigate to Dashboard with user data after successful submission
      navigate("/Dashboard", {
        state: { firstName: formData.firstName, lastName: formData.lastName },
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };
  return (
    <div className="intro-container">
      {/* Progress Line */}
      <div className="progress-line">
        <div
          className="progress"
          style={{ width: `${(step / totalSteps) * 100}%` }} // Dynamic width
        ></div>
      </div>

      <div className="step-content">
        {step === 1 && (
          <div className="step">
            <h2>Tell us about yourself</h2>
            <div className="input-container">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <button onClick={nextStep} disabled={!formData.firstName || !formData.lastName}>
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="step">
            <h2>Get us up to speed</h2>
            <div className="options">
              <div className="option-box">
                <input
                  type="radio"
                  id="buildFromScratch"
                  name="pageOption"
                  value="buildFromScratch"
                  onChange={handleChange}
                  checked={formData.pageOption === "buildFromScratch"}
                />
                <label htmlFor="buildFromScratch">I build my Page from scratch</label>
              </div>

              <div className="option-box">
                <input
                  type="radio"
                  id="linkInBio"
                  name="pageOption"
                  value="linkInBio"
                  onChange={handleChange}
                  checked={formData.pageOption === "linkInBio"}
                />
                <label htmlFor="linkInBio">I have a link-in-bio</label>
              </div>
            </div>

            <button onClick={nextStep} disabled={!formData.pageOption}>
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="step">
            <h3>Add Your Socials</h3>
            <div className="socials-container">
              {platforms.map((platform) => (
                <div key={platform} className="social-item">
                  <img
                    src={logoMap[platform] || "/images/default.png"}
                    alt={`${platform} logo`}
                    className="social-logo"
                  />
                  <input
                    type="text"
                    name={platform}
                    value={formData.socials[platform] || ""}
                    onChange={handleChange}
                    placeholder={`Enter your ${platform} username/link`}
                    className="social-input"
                  />
                </div>
              ))}
            </div>
            <button onClick={nextStep}>Continue</button>
          </div>
        )}

        {step === 4 && (
          <div className="step">
            <h2>Add your links</h2>
            <p>It could be any link - your videos, podcasts, calendars, addresses... you name it!</p>
            <div className="link-input-container">
              <div className="input-with-button">
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="newLink"
                    value={formData.newLink}
                    onChange={handleChange}
                    placeholder="Any website link"
                    className="link-input"
                  />
                  
                  <button className="paste-button" onClick={pasteLink}>
                    Paste
                  </button>
                </div>
              </div>
              
            </div>
           
            <ul>
              {formData.links.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
            <button className="submit-button" onClick={nextStep}>
              Continue
            </button>
          </div>
        )}

        {step === 5 && (
          <div className="step">
            <h2>Choose your theme</h2>
            <p>Select a theme below to preview:</p>

            {/* Mobile-shaped containers for each theme, directly shown */}
            <div className="mobile-preview-container">
              <div className="yellow mobile-container">
                <p className="welcome-message">
                  Welcome, {formData.firstName} {formData.lastName}
                </p>
              </div>

              <div className="pink mobile-container">
                <p className="welcome-message">
                  Welcome, {formData.firstName} {formData.lastName}
                </p>
              </div>

              <div className="blue mobile-container">
                <p className="welcome-message">
                  Welcome, {formData.firstName} {formData.lastName}
                </p>
              </div>

              <div className="lightPink mobile-container">
                <p className="welcome-message">
                  Welcome, {formData.firstName} {formData.lastName}
                </p>
              </div>

              <div className="purple mobile-container">
                <p className="welcome-message">
                  Welcome, {formData.firstName} {formData.lastName}
                </p>
              </div>

              <div className="light mobile-container">
                <p className="welcome-message">
                  Welcome, {formData.firstName} {formData.lastName}
                </p>
              </div>

              <div className="dark mobile-container">
                <p className="welcome-message">
                  Welcome, {formData.firstName} {formData.lastName}
                </p>
              </div>
            </div>

            <button onClick={handleFinish}>Finish</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;