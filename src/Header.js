// Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import logo from './images/logo.png'; // Update this path to your logo image

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="header-title">Sports Central</h1>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="trending" smooth={true} duration={500} className="nav-link">Trending News</Link>
            </li>
            <li className="nav-item">
              <Link to="sports" smooth={true} duration={500} className="nav-link">Sports Categories</Link>
            </li>
            <li className="nav-item">
              <Link to="polls" smooth={true} duration={500} className="nav-link">Polls and Voting</Link>
            </li>
            <li className="nav-item">
              <Link to="articles" smooth={true} duration={500} className="nav-link">Sports Article</Link>
            </li>
          </ul>
        </nav>
        <button className="search-btn">
          <i className="fa fa-search"></i> Search
        </button>
      </div>
    </header>
  );
};

export default Header;
