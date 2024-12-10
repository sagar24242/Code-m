import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      {/* Header Section */}
      <header className="login-header">
      <Link to="/" className="brand-logo">Code-M</Link>
      <nav className="nav-links">
          <a href="#charts" className="nav-item">Charts</a>
          <a href="#marketplace" className="nav-item">Marketplace</a>
          <a href="#create" className="nav-item">Create</a>
          {/* <a href="#robux" className="nav-item">Robux</a> */}
        </nav>
      </header>

      {/* Main Login Box */}
      <main className="login-box">
        <h2>Login to Code-M</h2>
        <form>
          <input
            type="text"
            placeholder="Username/Email/Phone"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <div className="additional-options">
          <a href="#forgot-password">Forgot Password or Username?</a>
          <a href="#one-time-code">Email Me a One-Time Code</a>
          <a href="#another-device">Use Another Device</a>
        </div>
        <div className="sign-up-link">
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#jobs">Jobs</a>
          <a href="#blog">Blog</a>
          <a href="#parents">Parents</a>
          <a href="#gift-cards">Gift Cards</a>
          <a href="#help">Help</a>
          <a href="#terms">Terms</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#privacy">Privacy</a>
          <a href="#choices">Your Privacy Choices</a>
        </div>
        <p>©2024 Code-M Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
