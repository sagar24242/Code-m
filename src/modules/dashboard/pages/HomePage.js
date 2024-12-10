import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA library
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otpInputVisible, setOtpInputVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const [captchaVisible, setCaptchaVisible] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const RECAPTCHA_SITE_KEY = "6Lfm7I0qAAAAADm8fMd69q5KB_tVcq8-2J835N2p"; // Replace with your reCAPTCHA site key

  // Handle sending OTP
  const handleSendOtp = () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    setOtpInputVisible(true);
    setIsButtonDisabled(true);
    setTimer(30); // Set timer for 30 seconds

    // Simulate OTP sending (you can integrate your OTP API here)
    console.log("OTP sent to:", email);

    // Start countdown
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          setIsButtonDisabled(false);
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Handle OTP input
  const handleOtpSubmit = () => {
    if (otp.length !== 4) {
      alert("Please enter a valid 4-digit OTP");
      return;
    }
    setCaptchaVisible(true);
  };

  // Handle CAPTCHA verification success
  const handleRecaptchaSuccess = (token) => {
   
    console.log("reCAPTCHA token:", token);

   
    // Send the token to the backend for validation
    fetch("http://127.0.0.1:8000/api/user/validate-recaptcha/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recaptcha_token: token }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data.status == 200) {
            addBlurEffect();
          setRecaptchaVerified(true);
          alert("reCAPTCHA verified! You are logged in.");
          navigate("/profile"); // Redirect to profile page
        } else {
          alert("reCAPTCHA verification failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("reCAPTCHA validation error:", error);
      });
  };

  const addBlurEffect = () => {
    const content = document.getElementById("blurBack");
    content.classList.add("blur-background");
  };

  const removeBlurEffect = () => {
    const content = document.getElementById("blurBack");
    content.classList.remove("blur-background");
  };

  // Handle Login/Signup button click
  const handleLoginSignup = () => {
    if (!recaptchaVerified) {
      alert("Please complete the reCAPTCHA!");
      return;
    }

    alert("Login/Signup successful!");
    navigate("/profile"); // Redirect to profile page
  };

  return (
    <div className="homepage-container">
      {/* Header with Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          {/* Left Section */}
          <div className="nav-left">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
          </div>

          {/* Center Logo */}
          <div className="nav-center">
            <img
              src="https://i.ibb.co/c32Ww0p/Black-and-White-Circle-Product-Branding-Logo-removebg-preview.png"
              alt="Logo"
              className="logo-image"
            />
          </div>

          {/* Right Section */}
          <div className="nav-right">
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <span className="nav-icon">Wallet</span>
            <span className="nav-icon">Notifications</span>
            <img src="/avatar.png" alt="User Avatar" className="avatar-image" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="content">
        {/* Left Section */}
        <aside className="left-section">
          <h3 className="section-title">Download Links</h3>
          <button className="download-button">Download for Windows</button>
          <button className="download-button">Download for Mac</button>

          <h3 className="section-title">Login / Signup</h3>

          <form>
            {/* Email Input */}
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-12 input-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="button"
                    className="otp-button"
                    onClick={handleSendOtp}
                    disabled={isButtonDisabled}
                  >
                    Send OTP
                  </button>
                </div>
                <div className="col-md-12">
                  <span className="pull-right">
                    {isButtonDisabled ? `Resend OTP in ${timer}s` : ""}
                  </span>
                </div>
                  {otpInputVisible && (
                    <div className="col-md-12 input-group">
                      <input
                        type="text"
                        placeholder="Enter OTP"
                        className="input-field"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                      <button
                        type="button"
                        className="otp-button"
                        onClick={handleOtpSubmit}
                      >
                        Verify OTP
                      </button>
                    </div>
                  )}

                  {/* CAPTCHA */}
                  {captchaVisible && (
                    <div className="captcha-container align-center">
                      <ReCAPTCHA
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={handleRecaptchaSuccess}
                        // onFocus={addBlurEffect} // Add blur when focusing on reCAPTCHA
                        // onBlur={removeBlurEffect}
                      />
                    </div>
                  )}
                </div>
              </div>
          </form>
        </aside>

        {/* Center Section */}
        <main className="center-section">
          <h3 className="section-title">Community Updates</h3>
          <div className="updates-grid">
            {/* Announcements */}
            <div className="announcements">
              <h4 className="sub-title">Announcements</h4>
              <ul className="announcement-list">
                <li>[Notice] Event 1 details...</li>
                <li>[Notice] Event 2 schedule...</li>
                <li>[Notice] Update 3 launch...</li>
              </ul>
            </div>

            {/* Premium Items */}
            <div className="premium-items">
              <h4 className="sub-title">Premium Items</h4>
              <div className="item">
                <img
                  src="/images/item1.png"
                  alt="Item 1"
                  className="item-image"
                />
                <p className="item-description">
                  Shield Card - Protects against upgrades
                </p>
                <p className="item-price">3,300 Coins</p>
              </div>
              <div className="item">
                <img
                  src="/images/item2.png"
                  alt="Item 2"
                  className="item-image"
                />
                <p className="item-description">
                  Protector - Increases XP gain for 30 days
                </p>
                <p className="item-price">5,500 Coins</p>
              </div>
            </div>

            {/* Screenshots */}
            <div className="screenshots">
              <h4 className="sub-title">Screenshots</h4>
              <div className="screenshot">
                <img src="/images/screenshot1.png" alt="Screenshot 1" />
                <p>Capture the excitement!</p>
              </div>
              <div className="screenshot">
                <img src="/images/screenshot2.png" alt="Screenshot 2" />
                <p>Battle for glory!</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="social-links">
              <h4 className="sub-title">Stay Connected</h4>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/facebook-icon.png"
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/twitter-icon.png"
                  alt="Twitter"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </main>

        {/* Right Section */}
        <aside className="right-section">
          <h3 className="section-title">Other Updates</h3>
          <div className="update-card">Update A</div>
          <div className="update-card">Update B</div>
          <div className="update-card">Update C</div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};

export default HomePage;
