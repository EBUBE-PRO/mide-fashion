import React, { useState } from 'react'; // Import useState
import logo from '../assets/Mide.png';

// Define styles as objects for better organization and reusability
const navbarStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.07)',
  backdropFilter: 'blur(10px)',
  position: 'fixed',
  width: '100%',
  top: 0,
  left: 0,
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px', // Adjusted padding for responsiveness
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
};

const logoImgStyle = {
  height: '40px',
  borderRadius: '8px'
};

// Base style for nav links container (for larger screens)
const navLinksContainerBaseStyle = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  gap: '20px'
};

const navLinkStyle = {
  color: '#FFC0CB',
  textDecoration: 'none',
  fontWeight: 'bold',
  padding: '5px 10px',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease, color 0.3s ease'
};

const navLinkHoverStyle = {
  color: '#FFFFFF',
  backgroundColor: 'rgba(255, 192, 203, 0.2)'
};

const hamburgerStyle = {
    display: 'none', // Hidden by default, shown via media query
    flexDirection: 'column',
    cursor: 'pointer',
    padding: '10px',
    zIndex: 1001, // Ensure it's above other nav elements if needed
}

const barStyle = {
    width: '25px',
    height: '3px',
    backgroundColor: '#FFC0CB',
    margin: '3px 0',
    transition: '0.4s',
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Styles for the mobile menu (dropdown)
  const mobileNavLinksContainerStyle = {
    display: isOpen ? 'flex' : 'none', // Controlled by state
    flexDirection: 'column',
    listStyle: 'none',
    margin: 0,
    padding: '10px',
    gap: '10px',
    alignItems: 'flex-start',
    position: 'absolute',
    top: '68px',
    right: '0',
    width: '150px',
    backgroundColor: 'rgba(255, 255, 255, 0.07)', 
    backdropFilter: 'blur(30px)', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    borderRadius: '0 0 0 8px',
  };

  // Dynamic styles for hamburger icon bars
  const bar1Style = isOpen ? { ...barStyle, transform: 'rotate(-45deg) translate(-5px, 6px)' } : barStyle;
  const bar2Style = isOpen ? { ...barStyle, opacity: 0 } : barStyle;
  const bar3Style = isOpen ? { ...barStyle, transform: 'rotate(45deg) translate(-5px, -6px)' } : barStyle;

  return (
    <>
      <nav style={navbarStyle}>
        <div className="logo">
          <img 
            src={logo} 
            alt="Artistry by Mide" 
            style={logoImgStyle}
          />
        </div>
        
        <div className="hamburger" onClick={toggleMenu} style={hamburgerStyle}>
          <div style={bar1Style}></div>
          <div style={bar2Style}></div>
          <div style={bar3Style}></div>
        </div>

        {/* Desktop Navigation Links - hidden on small screens via CSS */}
        <ul style={navLinksContainerBaseStyle} className="desktop-nav-links">
          <li><a href="#header" style={navLinkStyle} onMouseOver={(e) => { e.currentTarget.style.color = navLinkHoverStyle.color; e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor; }} onMouseOut={(e) => { e.currentTarget.style.color = navLinkStyle.color; e.currentTarget.style.backgroundColor = 'transparent'; }}>Home</a></li>
          <li><a href="#about" style={navLinkStyle} onMouseOver={(e) => { e.currentTarget.style.color = navLinkHoverStyle.color; e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor; }} onMouseOut={(e) => { e.currentTarget.style.color = navLinkStyle.color; e.currentTarget.style.backgroundColor = 'transparent'; }}>About</a></li>
          <li><a href="#gallery" style={navLinkStyle} onMouseOver={(e) => { e.currentTarget.style.color = navLinkHoverStyle.color; e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor; }} onMouseOut={(e) => { e.currentTarget.style.color = navLinkStyle.color; e.currentTarget.style.backgroundColor = 'transparent'; }}>Gallery</a></li>
          <li><a href="#services" style={navLinkStyle} onMouseOver={(e) => { e.currentTarget.style.color = navLinkHoverStyle.color; e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor; }} onMouseOut={(e) => { e.currentTarget.style.color = navLinkStyle.color; e.currentTarget.style.backgroundColor = 'transparent'; }}>Services</a></li>
          <li><a href="#pricing" style={navLinkStyle} onMouseOver={(e) => { e.currentTarget.style.color = navLinkHoverStyle.color; e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor; }} onMouseOut={(e) => { e.currentTarget.style.color = navLinkStyle.color; e.currentTarget.style.backgroundColor = 'transparent'; }}>Pricing</a></li>
          <li><a href="#contact" style={navLinkStyle} onMouseOver={(e) => { e.currentTarget.style.color = navLinkHoverStyle.color; e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor; }} onMouseOut={(e) => { e.currentTarget.style.color = navLinkStyle.color; e.currentTarget.style.backgroundColor = 'transparent'; }}>Contact</a></li>
        </ul>

        {/* Mobile Navigation Links - shown when hamburger is open */}
        {isOpen && (
          <ul style={mobileNavLinksContainerStyle} className="mobile-nav-links">
            <li><a href="#header" style={{...navLinkStyle, display: 'block', width: '100%'}} onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" style={{...navLinkStyle, display: 'block', width: '100%'}} onClick={toggleMenu}>About</a></li>
            <li><a href="#gallery" style={{...navLinkStyle, display: 'block', width: '100%'}} onClick={toggleMenu}>Gallery</a></li>
            <li><a href="#services" style={{...navLinkStyle, display: 'block', width: '100%'}} onClick={toggleMenu}>Services</a></li>
            <li><a href="#pricing" style={{...navLinkStyle, display: 'block', width: '100%'}} onClick={toggleMenu}>Pricing</a></li>
            <li><a href="#contact" style={{...navLinkStyle, display: 'block', width: '100%'}} onClick={toggleMenu}>Contact</a></li>
          </ul>
        )}
      </nav>
      
      <style jsx global>{`
        .hamburger {
          display: none; /* Hidden by default */
        }
        .desktop-nav-links {
          display: flex; /* Visible by default */
        }
        .mobile-nav-links {
          /* This class is mainly for semantic distinction if needed, 
             its display is controlled by 'isOpen' state and inline style */
        }

        @media (max-width: 768px) {
          .desktop-nav-links {
            display: none !important; /* Hide desktop links on small screens */
          }
          .hamburger {
            display: flex !important; /* Show hamburger on small screens */
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;