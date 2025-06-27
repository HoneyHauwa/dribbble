import React from "react";
import "./footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">Dribbble</div>
        <div className="footer-links">
          <span>For Designers</span>
          <span>Hire Talent</span>
          <span>Inspiration</span>
          <span>Advertising</span>
          <span>Blog</span>
          <span>About</span>
          <span>Careers</span>
          <span>Support</span>
        </div>
        <div className="footer-icons">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaPinterestP />
        </div>
      </div>

      
      <div className="footer-bottom">
        <div className="footer-left">
          © 2025 Dribbble &nbsp;&nbsp; Terms &nbsp;&nbsp; Privacy &nbsp;&nbsp; Cookies
        </div>
        <div className="footer-right">
          Jobs &nbsp;&nbsp; Designers &nbsp;&nbsp; Freelancers &nbsp;&nbsp; Tags &nbsp;&nbsp; Places &nbsp;&nbsp; Resources
        </div>
      </div>
    </footer>
  );
};

export default Footer;
