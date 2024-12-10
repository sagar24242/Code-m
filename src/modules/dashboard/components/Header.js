import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => (
  <header className="dashboard-header">
    <div className="logo-section">
      <h1 className="logo-text">Code-M</h1>
    </div>
    <nav className="nav-links">
      <a href="#news" className="nav-item">News of Heavenly Falls</a>
      <a href="#data-room" className="nav-item">Data Room</a>
      <a href="#point-shop" className="nav-item">Point Shop</a>
      <Link to="/login" className="nav-item">Login</Link>
    </nav>
  </header>
);

export default Header;
