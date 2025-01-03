import React, { useState } from "react";
import "./Intro.css"; // Import your custom styles

const Intro = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          style={{ width: `${(step / 2) * 100}%` }} // Dynamic width
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
            {/* Continue Button */}
            <button
              onClick={nextStep}
              disabled={!formData.firstName || !formData.lastName} // Disable if fields are empty
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="step">
            <h1>Get us up to speed</h1>
            {/* New Options */}
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

            {/* Finish Button */}
            <button onClick={nextStep} disabled={!formData.lastName || !formData.pageOption}>
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="step">
            <h2>Welcome, {formData.firstName} {formData.lastName}!</h2>
            <p>Thank you for providing your details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
