import React from 'react';
import './Contact.css'; // Optional CSS for styling
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page" style={{ padding: '40px', maxWidth: '1100px', margin: '0 auto' }}>
      <h1>Contact Us</h1>
      <p>We’re here to help. Reach out to us anytime!</p>

      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '30px' }}>
        {/* Contact Details */}
        <div className="contact-info">
          <h3>Radisson Chandigarh Zirakpur</h3>
          <p><FaMapMarkerAlt /> Patiala Road, Zirakpur, Punjab 140603, India</p>
          <p><FaPhoneAlt /> +91 1762 666000</p>
          <p><FaEnvelope /> reservations@radissonzirakpur.com</p>

          {/* Socials */}
          <div style={{ marginTop: '20px' }}>
            <h4>Connect with us</h4>
            <div className="social-icons" style={{ display: 'flex', gap: '15px', fontSize: '1.5rem' }}>
              <a href="https://www.facebook.com/RadissonHotels" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/radissonhotels/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com/radissonhotels" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="map">
          <iframe
            title="Radisson Zirakpur Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.9692843723293!2d76.82329917494961!3d30.633683075093294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed6ff62c1b3f%3A0x4c6ad68c4bbbeea6!2sRadisson%20Chandigarh%20Zirakpur!5e0!3m2!1sen!2sin!4v1720489569930!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
