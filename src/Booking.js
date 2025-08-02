import React, { useState } from 'react';
import './Booking.css';
import { FaWifi, FaUtensils, FaTv, FaSnowflake, FaBed, FaSwimmingPool, FaConciergeBell, FaSpa, FaCheckCircle } from 'react-icons/fa';

const bookingRooms = [
  {
    name: 'Superior Room',
    size: '33 m²',
    capacity: '3 Adults',
    bed: '1 King or 2 Twin',
    price: '₹3,000/night',
    image: '/images/room/superior1.webp',
    description: 'A comfortable room with all essential amenities for a relaxing stay.',
    services: [FaWifi, FaBed, FaSnowflake, FaTv],
  },
  {
    name: 'Deluxe Room',
    size: '37 m²',
    capacity: '3 Adults',
    bed: '1 King or 2 Twin',
    price: '₹5,000/night',
    image: '/images/room/delux/del1.avif',
    description: 'Spacious and stylish, ideal for both business and leisure travelers.',
    services: [FaWifi, FaUtensils, FaTv, FaSnowflake],
  },
  {
    name: 'Business Class Room',
    size: '42 m²',
    capacity: '3 Adults, 1 Child (0–12)',
    bed: '1 King',
    price: '₹7,000/night',
    image: '/images/room/sup2.avif',
    description: 'Perfect for professionals. Offers upgraded amenities and space.',
    services: [FaWifi, FaTv, FaConciergeBell, FaSnowflake],
  },
  {
    name: 'Executive Suite',
    size: '52 m²',
    capacity: '3 Adults',
    bed: '1 King',
    price: '₹12,000/night',
    image: '/images/room/delux/del2.avif',
    description: 'Luxury meets comfort in this elegant suite with premium features.',
    services: [FaTv, FaSwimmingPool, FaSnowflake, FaUtensils],
  },
  {
    name: 'Presidential Suite',
    size: '70 m²',
    capacity: '4 Adults',
    bed: '1 King + 1 Twin',
    price: '₹20,000/night',
    image: '/images/room/sup3.avif',
    description: 'Our most premium suite with lavish interiors and personalized service.',
    services: [FaBed, FaSpa, FaConciergeBell, FaTv],
  },
];

const Booking = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBooking = () => {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000); // Hide after 3 sec
  };

  return (
    <div className="booking-main">

      {/* Background Video */}
      <div className="video-background-container">
        <video className="background-video" src="/videos/about.mp4" autoPlay muted loop />
        <div className="video-overlay">
          <h1>Welcome to Radisson Zirakpur</h1>
        </div>
      </div>

      {/* Intro Text */}
      <div className="room-intro-text">
        <h2>Our Room Types</h2>
        <p>
          Whether you're visiting for business or leisure, Radisson Zirakpur offers a selection of rooms to suit your style.
        </p>
      </div>

      {/* Room Sections */}
      {bookingRooms.map((room, index) => {
        const isEven = index % 2 === 0;
        const Services = room.services;

        return (
          <div className={`booking-room-section fade-in ${isEven ? 'left-layout' : 'right-layout'}`} key={index}>
            {/* Room Info */}
            <div className="room-info">
              <h2 className="room-name">{room.name}</h2>
              <p><strong>Size:</strong> {room.size}</p>
              <p><strong>Capacity:</strong> {room.capacity}</p>
              <p><strong>Bed:</strong> {room.bed}</p>
              <p><strong>Price:</strong> {room.price}</p>
              <p className="room-description">{room.description}</p>
              <div className="icon-row">
                {Services.map((Icon, i) => (
                  <Icon key={i} className="service-icon" />
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <div className="room-book-box">
              <img className="room-image" src={room.image} alt={room.name} />
              <div className="input-boxes">
                <label>Check-in</label>
                <input type="date" />
                <label>Check-out</label>
                <input type="date" />
                <button className="book-button" onClick={handleBooking}>Book Now</button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Modal */}
      {showModal && (
        <div className="booking-modal">
          <div className="modal-content">
            <FaCheckCircle size={40} color="green" />
            <p>Booking Successful! A confirmation email has been sent.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
