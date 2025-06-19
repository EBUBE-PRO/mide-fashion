import React from 'react';
import './Services.css';

import image1 from './assets/pretty.jpeg';   
import image2 from './assets/Makeup.jpeg'; 
import image3 from './assets/puff.jpeg';


function Services() {
    return (
        <div className="services-section"> 
            <div>
                <h1>Our Services</h1>
            </div>
          
        
         

            

            <div className="service-cards-container">
                <div className="service-card">
                    <img src={image1} alt="lash" className="service-card-image" />
                    <div className="service-card-text">
                        <h5>Lash Extensions</h5>
                        <p>Classic, volume, and hybrid lash extensions tailored to your unique style.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src={image2} alt="makeup" className="service-card-image" />
                    <div className="service-card-text">
                        <h5>Makeup Application</h5>
                        <p>Professional makeup application for any occasion, enhancing your natural beauty.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src={image3} alt="Consultation" className="service-card-image" />
                    <div className="service-card-text">
                        <h5>Consultations</h5>
                        <p>Personalized consultations to discuss your desired look and create a customized plan.</p>
                    </div>
                </div>
            </div>
              


              <p>We specialize in lash extensions and makeup application for all events. Consultation options are available for personalized services.</p>
     
        </div>
    );
}

export default Services;