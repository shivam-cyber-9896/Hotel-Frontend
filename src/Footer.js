import React from 'react';
import './Footer.css';
import {
  FaFacebookF, FaInstagram, FaPinterestP,
  FaTwitter, FaYoutube, FaLinkedinIn, FaPhoneAlt
} from 'react-icons/fa';

const destinations = [
  'Amsterdam', 'Bangkok', 'Bengaluru', 'Berlin', 'Budapest', 'Copenhagen',
  'Dubai', 'Dublin', 'Gran Canaria', 'Istanbul', 'London', 'Manchester', 'Milan',
  'New Delhi', 'Oslo', 'Paris', 'Riga', 'Shanghai', 'Stockholm', 'Zurich'
];

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top bar */}
      <div className="footer-topbar">
        <span>NEVER MISS OUT ON OUR MOST POPULAR DEALS</span>
        <div className="footer-social">
          <FaFacebookF />
          <FaInstagram />
          <FaPinterestP />
          <FaTwitter />
          <FaYoutube />
          <FaLinkedinIn />
        </div>
      </div>

      {/* Hot Destinations */}
      <div className="footer-destinations">
        <h4>Hot destinations</h4>
        <div className="destinations-list">
          {destinations.map((city, idx) => (
            <span key={idx} className="destination-pill">{city}</span>
          ))}
        </div>
      </div>

      {/* Footer Columns */}
      <div className="footer-columns">
        <div>
          <h4>Quick links</h4>
          <ul>
            <li>Radisson Rewards</li>
            <li>Best Online Rate Guarantee</li>
            <li>Blog</li>
            <li>Destinations</li>
            <li>New and upcoming hotels</li>
            <li>Radisson Hotels APP</li>
            <li>Sports Approved hotels</li>
            <li>Family Friendly Hotels</li>
            <li>Health & Safety</li>
          </ul>
        </div>
        <div>
          <h4>Travel professionals</h4>
          <ul>
            <li>Partners</li>
            <li>Travel agents</li>
          </ul>
        </div>
        <div>
          <h4>Corporate</h4>
          <ul>
            <li>Radisson Hotel Group</li>
            <li>Media</li>
            <li>Careers RHG</li>
            <li>Careers PPHE</li>
            <li>Careers EHL</li>
            <li>The Club by RHG</li>
            <li>Development Opportunities</li>
            <li>Responsible Business</li>
            <li>Procurement</li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li>Privacy Center</li>
            <li>Legal notice</li>
            <li>Radisson Rewards terms and conditions</li>
            <li>Site usage agreement</li>
            <li>Digital Accessibility</li>
            <li>Modern Slavery Statement</li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul>
            <li>Consumer alerts</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Sitemap</li>
            <li><FaPhoneAlt /> 1800 1080 333 (IN)</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © 2025 <strong>Radisson Hotel Group</strong>. All rights reserved. RHG Radisson Hotel Group, Radisson, Radisson RED, Radisson Blu, Radisson Collection, Radisson Individuals, Park Plaza, Park Inn, Country Inn & Suites, Prize by Radisson, Radisson Rewards, and Radisson Meetings are trademarks of Radisson Hotel Group.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
