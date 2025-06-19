
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


import wedimage from "./assets/bridesmaid.jpeg";
import brushes from "./assets/brushes.jpeg";
import eyes from "./assets/eyes.jpeg";
import lash from "./assets/lash.jpeg";
import wed from "./assets/wed.jpeg";
import puff from "./assets/puff.jpeg";
import pretty from "./assets/pretty.jpeg";
import './Gallery.css';


const images = [
    { src: wedimage, alt: "Bridesmaid Makeup" },
    { src: wed, alt: "Wedding Makeup" },
    { src: pretty, alt: "Pretty Everyday Makeup" },
    { src: puff, alt: "Makeup Puff" },
    { src: brushes, alt: "Makeup Brushes" },
    { src: eyes, alt: "Eye Makeup" },
    { src: lash, alt: "Eyelash Application" },
];

function Gallery() {


  return (
    <div id="gallery" className="gallery-section">
      <h1 className="gallery-heading">Portfolio Gallery</h1>
      
      <div className="gallery-layout-container"> 
        <div className="carousel-wrapper">
          <Carousel 
              showArrows={true} 
              infiniteLoop={true} 
              useKeyboardArrows={true} 
              autoPlay={true} 
              showThumbs={false}
          >
              {images.map((image, index) => (
                  <div key={index}>
                      <img src={image.src} alt={image.alt} /> 
                  </div>
              ))}
          </Carousel>
        </div>

        <div className="gallery-text-content-wrapper"> 
          <div className="gallery-text-item"> 
              <h2>Bridal</h2> 
              <p>Stunning bridal transformations captured in high-resolution images. See how we create the perfect look for your special day.</p>
          </div>

          <div className="gallery-text-item"> 
              <h2>Everyday</h2>
              <p>Enhance your natural beauty with our everyday makeup looks. See how we create subtle enhancements.</p>
          </div>

          <div className="gallery-text-item"> 
              <h2>Editorial</h2>
              <p>Creative and captivating editorial makeup, highlighting our artistic vision.</p>
          </div>
        </div>
      </div>
            
    </div>
  );
}

export default Gallery;