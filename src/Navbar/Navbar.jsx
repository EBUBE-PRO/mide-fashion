import React from 'react';
import logo from '../assets/Mide.png';



function Navbar() {
  return (
    <>
      <nav style={{
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
        padding: '10px 100px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        {/* Logo */}
        <div className="logo">
          <img 
            src={logo} 
            alt="Artistry by Mide" 
            style={{
              height: '40px', 
              borderRadius: '8px'
            }}
          />
        </div>
        
        {/* Navigation Links */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '20px'
        }}>
          <li><a href="#header" style={navLinkStyle}>Home</a></li>
          <li><a href="#about" style={navLinkStyle}>About</a></li>
          <li><a href="#gallery" style={navLinkStyle}>Gallery</a></li>
          <li><a href="#services" style={navLinkStyle}>Services</a></li>
          <li><a href="#pricing" style={navLinkStyle}>Pricing</a></li>
          <li><a href="#contact" style={navLinkStyle}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

// navigation links style
const navLinkStyle = {
  color: '#FFC0CB',
  textDecoration: 'none',
  fontWeight: 'bold',
  padding: '5px 10px',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
  ':hover': {
    backgroundColor: 'rgb(255, 255, 255)'
  }
}
navLinkStyle[":hover"] = {
  color:'#FFC0CB',
}
;

export default Navbar;