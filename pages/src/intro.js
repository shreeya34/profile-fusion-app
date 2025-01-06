import React, { useState } from "react";
import "./Intro.css"; // Import your custom styles

const Intro = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    pageOption: "",
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
  });

  // Array of social platforms
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

  // Handle input changes for form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      if (name === "firstName" || name === "lastName" || name === "pageOption") {
        return { ...prevData, [name]: value };
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

  // Move to the next step
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className="intro-container">
      {/* Progress Line */}
      <div className="progress-line">
        <div
          className="progress"
          style={{ width: `${(step / 3) * 100}%` }} // Dynamic width
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
            <button
              onClick={nextStep}
              disabled={!formData.firstName || !formData.lastName}
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="step">
            <h1>Get us up to speed</h1>
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
                <label htmlFor="buildFromScratch">
                  I build my Page from scratch
                </label>
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
                  src={`/images/${platform}-logo.svg`}
                  alt={`${platform} logo`}
                  className="social-logo"
                  onError={(e) => {
                    e.target.src = "/images/default-logo.svg";
                  }}
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
            <button onClick={nextStep} className="finish-button">
              Finish
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
