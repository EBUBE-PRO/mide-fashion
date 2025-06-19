import React from "react";
import mide from "./assets/brushes.jpeg";
import './About.css'; // We'll create this file

function About() {
    return (
        <div id="about" className="about-section">
            <h1 className="about-title">About Mide</h1> 
            <div className="about-content-container"> {/* New container for image and text */}
                <img src={mide} alt="Mide - Makeup Artistry" className="about-image" />
    
                <div className="about-text-wrapper">
                    <p className="about-paragraph">
                        Mide is a certified makeup artist with 5 years of experience, specializing in bridal, editorial, and everyday makeup looks. My artistry philosophy centers around enhancing natural beauty and creating personalized looks that reflect each client's unique style. Makeup to me is more than a profession, but is driven by a passion to empower women to feel beautiful, both inside and out. Makeup is more than just strokes and pigment it's about giving people a way to express themselves to feel confident.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;


