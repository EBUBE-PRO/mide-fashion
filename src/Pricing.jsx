import React from "react";
import './Pricing.css'; 
import pricingImage from "./assets/pricing.jpeg";

function Pricing() {   
  const services = [
    { name: "Classic Lash Set", price: "₦4,000" },
    { name: "Hybrid Lash Set", price: "₦5,000" },
    { name: "Volume Lash Set", price: "₦6,000" },
    { name: "Natural Glam Makeup Look", price: "₦15,000" },
    { name: "Studio Makeup Session", price: "₦30,000  [Terms and conditions apply]" },
    { name: "Bridal Makeup", price: "₦50,000  [Terms and conditions apply]" },
    { name: "Customizable Makeup", price: "₦*****" } 
  ];

  return (
    <div id="pricing" className="pricing-section">
      <h1 className="pricing-heading">Pricing & Packages</h1>
      
      <div className="pricing-content-container"> {/* New wrapper for image and table */}
        <div className="pricing-image-container">
          <img src={pricingImage} alt="Pricing Information" className="pricing-image" />
        </div>

        <table className="pricing-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th> 
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pricing;