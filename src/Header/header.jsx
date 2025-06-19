import React from "react";

import image from "../assets/bride.jpeg";

function Header(){
    return (
    <>
    <header id="header" style={{
        backgroundColor: "#872657",
        color: "#FFFFFF",
        padding: "120px 10px 30px 10px", 
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around", // Changed for better spacing
        flexWrap: "wrap" // Allow items to wrap
    }}>
        
        {/* Middle: Text Content */}
        <div style={{ flex: "1 1 300px", textAlign: "center" , color: "#FA95AF", padding: "20px" }}> 
            <h1 style={{ fontSize: "2.5em", marginBottom: "15px" }}> Artistry by Mide: Lash and Makeup</h1>
            <p style={{ maxWidth: "600px", lineHeight: "1.6",textAlign:"justify", margin: "0 auto",color:"#ffffff" }}> 
                Professional makeup and lash artistry specializing in bridal, editorial,<br />  and everyday looks. Browse our portfolio and book your session today!
            </p>
        </div>

        {/* Right: Bridal Image */}
        <div style={{ flex: "1 1 300px", textAlign: "center", padding: "20px" }}> 
            <img src={image} alt="Bridal Makeup Example" style={{ 
                maxWidth: "100%", // Make image responsive
                height: "auto", // Maintain aspect ratio
                maxHeight: "340px", // Keep max height if desired
                borderRadius: "15px"
            }} />
        </div>
    </header>
    {/* It's generally better to put media queries in a CSS file */}
    <style jsx global>{`
        @media (max-width: 768px) {
            #header {
                flex-direction: column;
                padding: 80px 10px 20px 10px;
            }
            #header > div {
                flex-basis: auto; /* Allow content to determine height */
                margin-left: 0 !important; /* Override inline styles */
                margin-right: 0 !important; /* Override inline styles */
            }
            #header h1 {
                font-size: 2em;
            }
            #header p {
                text-align: center;
            }
        }
    `}</style>
    </>
    );
}

export default Header;