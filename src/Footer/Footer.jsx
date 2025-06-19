import React from "react";
import heroimg from "../assets/Mide.png";
import "./Footer.css"; // Changed to standard import

import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";


// import ContactForm from "../component/contactform";
// import "../component/contactform.css";
// import "./Footer.css"; // Uncomment if you have a CSS file for styling
// Optional: You can replace these with real links or icons
const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/Artistry_by_Mide", icon: <FaInstagram />, handle: "@Artistry_by_Mide" },
  { name: "Tiktok", url: "https://tiktok.com/@_mi.de_", icon: <FaTiktok />, handle: "@_mi.de_" },
  { name: "Whatsapp", url: "https://wa.me/2349160541679", icon: <FaWhatsapp />, handle: "09160541679" },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#872657", color: "#FFFFFF", padding: "30px 10px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "space-between" }}>
        
        {/* Logo and Description */}
        <div style={{ flex: "1 1 250px" }}>
          <img 
            src={heroimg} 
            alt="Logo" 
            className="logo" // Added className for styling via Footer.css
            style={{ width: "120px",marginBottom: "20px", borderRadius: "8px" }} 
          />
          <p style={{ lineHeight: "1.6" , color: "#FFC0CB",}}>
            We are committed to delivering the best, designing the best face art & experiences for Our Artists worldwide.
          </p>
        </div>

        

        {/* Quick Links */}
        <div style={{ flex: "1 1 200px" }}>
          <h3 style={{ marginBottom: "15px" }}>Company</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><a href="#" style={{ color: "#FFC0CB", textDecoration: "none" }}>About Us</a></li>
            <li><a href="#" style={{ color: "#FFC0CB", textDecoration: "none" }}>Services</a></li>
            <li><a href="#" style={{ color: "#FFC0CB", textDecoration: "none" }}>Gallery</a></li>
            <li><a href="#" style={{ color: "#FFC0CB", textDecoration: "none" }}>Contact</a></li>
            <li><a href="#" style={{ color: "#FFC0CB", textDecoration: "none" }}>Pricing</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div style={{ flex: "1 1 350px" }}>
          <h3 style={{ marginBottom: "15px" }}>Follow Us</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                title={social.name}
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "10px", 
                  color: "#FFC0CB", 
                  textDecoration: "none",
                  fontSize: "16px"
                }}
              >
                <span style={{ fontSize: "24px" }}>{social.icon}</span>
                <span>{social.handle}</span>
              </a>
              
            ))}
          </div>
        </div>
      </div>

      
      {/* <ContactForm/> */}

      {/* Footer Bottom */}
      <div style={{ textAlign: "center", marginTop: "40px", fontSize: "14px", color: "#FFFFFF" }}>
        © {new Date().getFullYear()} Artistry by Mide. All rights reserved.
      </div>
     
    </footer>
  );
};

export default Footer;
