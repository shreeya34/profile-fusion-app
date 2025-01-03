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
      spotify: "",
      telegram: "",
      discord: "",
      medium: "",
    }, // Store socials as an object
  });

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

      {/* Step Content */}
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

            <button
              onClick={nextStep}
              disabled={!formData.pageOption}
            >
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="step">
            <h3>Add your socials</h3>
            <div className="socials-container">
              {["instagram", "linkedin", "facebook", "tiktok", "snapchat", "twitter", "pinterest", "mail", "phone", "website", "github", "spotify", "telegram", "discord", "medium"].map((platform) => (
                <div className="social-input-box" key={platform}>
                  <label htmlFor={platform}>
                    <img
                      src={`/images/${platform}-logo.svg`} // Assuming you have logo images for each platform
                      alt={`${platform} logo`}
                      className="social-logo"
                      onError={(e) => {
                        e.target.src = "/images/default-logo.svg"; // Fallback logo
                      }}
                    />
                    
                  </label>
                  <input
                    type="text"
                    name={platform}
                    value={formData.socials[platform]}
                    onChange={handleChange}
                    placeholder={`Enter your ${platform} username/link`}
                  />
                </div>
              ))}
            </div>
            <button onClick={nextStep}>Finish</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
