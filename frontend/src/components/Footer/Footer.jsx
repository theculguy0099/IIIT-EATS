import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import badge from "../../assets/iiiteats.png";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={badge} alt="IIIT Eats logo" className="footer-logo" />
          <p className="footer-description">
            <b>IIIT Eats</b>: Your Best Intra-Campus Food Delivery Solution. Quick, easy, and delicious meals from your favorite campus canteens.
          </p>
          <div className="footer-social-icons">
            <a href="#" aria-label="Facebook"><img src={assets.facebook_icon} alt="Facebook" /></a>
            <a href="#" aria-label="Twitter"><img src={assets.twitter_icon} alt="Twitter" /></a>
            <a href="#" aria-label="LinkedIn"><img src={assets.linkedin_icon} alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="footer-section" id="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#explore-menu">Menu</a></li>
            <li><a href="#footer-section">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <ul>
            <li><i className="fas fa-phone"></i> +91-6358894483</li>
            <li><i className="fas fa-envelope"></i> kevinrt1923@gmail.com</li>
            <li><i className="fas fa-map-marker-alt"></i> IIIT-Hyderabad Campus, Hyderabad</li>
            <li><i className="fas fa-map-marker-alt"></i> Telangana</li>
            <li><i className="fas fa-map-marker-alt"></i> India</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 IIIT-EATS. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;