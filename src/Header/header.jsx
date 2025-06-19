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
        justifyContent: "space-between",
        
    }}>
        
        
        
        {/* Middle: Text Content */}
        <div style={{ flex: "1 1 auto", textAlign: "center" , color: "#FA95AF" }}> 
            <h1 style={{ fontSize: "2.5em" }}> Artistry by Mide: Lash and Makeup</h1>
            <p style={{ maxWidth: "600px", lineHeight: "1.6",textAlign:"justify", margin: "0 auto",color:"#ffffff" }}> 
                Professional makeup and lash artistry specializing in bridal, editorial,<br />  and everyday looks. Browse our portfolio and book your session today!
            </p>
        </div>

        {/* Right: Bridal Image */}
        <div style={{ flex: "0 0 auto", marginLeft: "20px", marginRight: "150px" }}> 
            <img src={image} alt="Bridal Makeup Example" style={{ 
                maxWidth: "340px", 
                borderRadius: "15px"
            }} />
        </div>
    </header>
    </>
    );
}

export default Header;