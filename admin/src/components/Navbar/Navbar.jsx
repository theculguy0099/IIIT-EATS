import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets/';
import badge from '../../assets/iiiteats.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img className='logo' src={badge} alt='website logo' />
      </div>
      <div className='navbar-center'>
        <h1 className='admin-title'>
          <span>Admin</span>
          <span>Panel</span>
        </h1>
      </div>
      <div className='navbar-right'>
        <div className='admin-info'>
          <span className='admin-name'>CulGuy0099</span>
          <span className='admin-role'>Super Admin</span>
        </div>
        <div className='profile-container'>
          <img 
            className='profile' 
            src={assets.profile_image} 
            alt='profile img' 
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className='admin-dropdown'>
              <div className='admin-dropdown-header'>
                <img className='dropdown-profile' src={assets.profile_image} alt='profile img' />
                <div>
                  <h3>CulGuy0099</h3>
                  <p>theculguy@gmail.com</p>
                </div>
              </div>
              <ul>
                <li><i className="fas fa-user"></i> My Profile</li>
                <li><i className="fas fa-cog"></i> Settings</li>
                <li><i className="fas fa-chart-bar"></i> Analytics</li>
                <li><i className="fas fa-question-circle"></i> Help</li>
                <li className='logout'><i className="fas fa-sign-out-alt"></i> Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;