

import Footer from './Footer/Footer.jsx';
import Gallery from './Gallery.jsx';
import About from './About.jsx';
import Header from './Header/header.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Contactform from './Contactform/Contactform.jsx';
import Services from './Services.jsx'; 
import Pricing from './Pricing.jsx';
//import Session from './Session/session.jsx';
import React from 'react';

function App() {
  return (
    
    <div className="div">
      <Navbar/>
      <div className="content">
      
        <Header />
        <About />
        <Gallery />
        <Services/>  
        <Pricing/> 
        <Contactform/>
      </div>
       <Footer /> 
    </div>
  );
}

export default App;