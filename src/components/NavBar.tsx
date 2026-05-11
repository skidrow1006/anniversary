import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaCamera, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';
import netflixLogo from '../images/netflix-logo.svg';
import blueImage from '../images/blue.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const profileImage = location.state?.profileImage || blueImage;

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={netflixLogo} alt="Netflix" />
          </Link>
          <ul className="navbar-links">
            <li><Link to="/browse">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/letter">Letter</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img src={profileImage} alt="Profile" className="profile-icon" onClick={() => { navigate('/browse') }} />
        </div>
      </nav>

      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <img src={netflixLogo} alt="Netflix Logo" />
        </div>
        <ul>
          <li><Link to="/browse" onClick={closeSidebar}><FaHome /> Home</Link></li>
          <li><Link to="/gallery" onClick={closeSidebar}><FaCamera /> Gallery</Link></li>
          <li><Link to="/letter" onClick={closeSidebar}><FaEnvelope /> Letter</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
