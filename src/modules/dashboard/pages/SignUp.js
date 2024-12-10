import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="signup-overlay">
      <header className="header">
        <h1 className="brand-logo">MyPlatform</h1>
        <button className="login-button" onClick={handleLoginRedirect}>
          Log In
        </button>
      </header>
      <main className="signup-box">
        <h2>Sign Up and Start Having Fun!</h2>
        <form>
          <div className="input-group">
            <label>Birthday</label>
            <div className="dob-selectors">
              <select className="dob-field">
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                {/* Add remaining months */}
              </select>
              <select className="dob-field">
                <option>Day</option>
                {/* Add days */}
              </select>
              <select className="dob-field">
                <option>Year</option>
                {/* Add years */}
              </select>
            </div>
          </div>
          <input type="text" placeholder="Username" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <div className="gender-select">
            <label>Gender (optional)</label>
            <div className="gender-options">
              <button type="button" className="gender-btn">
                Male
              </button>
              <button type="button" className="gender-btn">
                Female
              </button>
            </div>
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <div className="additional-info">
          <p>
            By clicking Sign Up, you agree to our{" "}
            <a href="#terms">Terms</a> and{" "}
            <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>
      </main>
      <footer className="footer">
        <p>©2024 MyPlatform. All rights reserved.</p>
        <nav>
          <a href="#about">About</a>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
        </nav>
      </footer>
    </div>
  );
};

export default SignUp;
