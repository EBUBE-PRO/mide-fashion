import React, { useState } from 'react';
import './Contactform.css'; // Corrected and uncommented import
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost/midePhp/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    });
    
    const result = await response.json();
    if (result.success) {
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Error: ' + result.error);
    }
  } catch (error) {
    alert('Network error occurred');
  }
};

  return (
    <div id="contact" className="contact-section">
      <h1 className="contact-heading">Contact & Location</h1>
      <div className="contact-container">
        {/* Swapped these two blocks */}
        <div className="contact-info">
          <div className="info-item">
            <FaPhone className="info-icon" />
            <span>+234 9160541679</span>
          </div>
<br />


          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>info.artistrybymide@gmail.com</span>
          </div>
          <br />


          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Shop B3 Trademore complex,<br /> Trademore estate Lugbe, Abuja.</span>
          </div>
<br />



<h5><p> Contact us by phone, email or you could send us a message for more inquiries. </p> </h5>
        </div>
        

        <form onSubmit={handleSubmit} className="contact-form">
          {/* Form inputs remain here */}
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          /><br />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          /><br />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          /><br />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;