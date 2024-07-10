import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import badge from "../../assets/iiiteats.png";


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={badge} alt="Logo" className="logo" />
      </Link>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </div>
      <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <li className={menu === "home" ? "active" : ""}>
          <a href="#" onClick={() => { setMenu("home"); setMobileMenuOpen(false); }}>
            Home
          </a>
        </li>
        <li className={menu === "menu" ? "active" : ""}>
          <a href="#explore-menu" onClick={() => { setMenu("menu"); setMobileMenuOpen(false); }}>
            Menu
          </a>
        </li>
        <li className={menu === "mobile-app" ? "active" : ""}>
          <a href="#facts" onClick={() => { setMenu("mobile-app"); setMobileMenuOpen(false); }}>About Us</a>
        </li>
        <li className={menu === "contact-us" ? "active" : ""}>
          <a href="#footer-section" onClick={() => { setMenu("contact-us"); setMobileMenuOpen(false); }}>
            Contact Us
          </a>
        </li>
      </ul>
      
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign-in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;