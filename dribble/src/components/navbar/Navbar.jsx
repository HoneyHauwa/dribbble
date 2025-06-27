import React from 'react';
import './navbar.css';
import { FaSearch } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="left-group">
            <div className="logo">Dribbble</div>

      <div className="search-box">

  <input type="text" placeholder="What are you looking for?" />
  <select className="search-dropdown">
    <option value="shots">Shots</option>
    <option value="designers">Designers</option>
    <option value="services">Services</option>
  </select>

  <FaSearch className="search-icon" />
</div>

        </div>
      

      <ul className="nav-links">
  <li className="dropdown">
    Explore <span className="caret">▾</span>
    <ul className="dropdown-menu">
      <li>Following</li>
      <li>Popular</li>
      <li>News</li>
    </ul>
  </li>

  <li className="dropdown">
    Hire a Designer <span className="caret">▾</span>
    <ul className="dropdown-menu">
       <li><i className="fas fa-search icon"></i> Browse Freelancers</li>
    <li><i className="fas fa-tag icon"></i> Purchase Service</li>
    <li><i className="fas fa-headset icon"></i> Talk to Talent Expert</li>
    <li><i className="fas fa-file-alt icon"></i> Post a Full-Time Job</li>
    </ul>
  </li>

  <li>Find Jobs</li>
  <li>Blog</li>

  <li className="icon-link">
    <i className="fa-regular fa-message">
    <ul className="dropdown-menu message-dropdown">
      <li className="dropdown-title">Your Messages</li>
      <li className="dropdown-empty">You have no messages</li>
      <li>
        <button className="view-all-btn">View All Messages</button>
      </li>
    </ul>
  </i>
  </li>

  <li className="icon-link">
    <i className="fa-regular fa-bell"></i>
  </li>

  <li className="profile-pic">
  <div className="profile-container">
    <img src="src/assets/img/myprofile.jpg" alt="Profile" />
    <span className="active-dot"></span>

    <div className="profile-dropdown">
      <div className="profile-info">
        <div className="profile-container small">
          <img src="src/assets/img/myprofile.jpg" alt="Profile" />
          <span className="active-dot"></span>
        </div>
        <p className="profile-name">Hauwa Abubakar</p>
      </div>
      <ul>
        <li>Settings</li>
        <li>Sign Out</li>
      </ul>
    </div>
  </div>
</li>

</ul>

    </nav>
  );
}

export default Navbar;
