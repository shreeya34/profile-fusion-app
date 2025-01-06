import React, { useState } from "react";
import "./Intro.css"; // Import your custom styles

const Intro = () => {
  const [step, setStep] = useState(1); // Track the current step
  const totalSteps = 4; // Total number of steps

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
      if (name === "firstName" || name === "lastName" || name === "pageOption") {
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
                <input
                  type="text"
                  name="newLink"
                  value={formData.newLink}
                  onChange={handleChange}
                  placeholder="Enter your link here"
                  className="link-input"
                />
                <button className="paste-button" onClick={pasteLink}>
                  Paste
                </button>
              </div>
            </div>
            <ul>
              {formData.links.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
            <button className="submit-button">Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
