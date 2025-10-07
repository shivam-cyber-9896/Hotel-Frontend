import React, { useState } from 'react';
import './Booking.css';
import axios from 'axios';
import { 
  FaWifi, FaUtensils, FaTv, FaSnowflake, FaBed, 
  FaSwimmingPool, FaConciergeBell, FaSpa, FaCheckCircle 
} from 'react-icons/fa';
import Reviews from './Reviews';

const API_URL = "https://hotel-backend-qon3.onrender.com/bookdone";

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
  const [showForm, setShowForm] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    numberOfRooms: 1,
    adults: 1,
    children: 0,
    checkin: '',
    checkout: '',
    guestDetails: [],
  });
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleBookingClick = (room) => {
    setSelectedRoom(room);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGuestDetailChange = (e, index) => {
    const newGuests = [...formData.guestDetails];
    newGuests[index] = e.target.value;
    setFormData({ ...formData, guestDetails: newGuests });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ownerName: formData.ownerName,
      email: formData.email,
      phone: formData.phone,
      roomType: selectedRoom?.name,
      numberOfRooms: parseInt(formData.numberOfRooms),
      adults: parseInt(formData.adults),
      children: parseInt(formData.children),
      guestDetails: formData.guestDetails,
      startDate: formData.checkin,
      endDate: formData.checkout,
    };

    try {
      await axios.post(API_URL, payload);
      setShowForm(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Booking failed:", error.response?.data || error.message);
      setErrorMsg(error.response?.data?.message || "Booking failed. Please try again.");
    }
  };

  const totalGuests = parseInt(formData.adults) + parseInt(formData.children);

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

            {/* Booking Form Box */}
            <div className="room-book-box">
              <img className="room-image" src={room.image} alt={room.name} />
              <div className="input-boxes">
                <label>Check-in</label>
                <input type="date" />
                <label>Check-out</label>
                <input type="date" />
                <button className="book-button" onClick={() => handleBookingClick(room)}>Book Now</button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Booking Request Form Modal */}
      {showForm && (
        <div className="booking-modal">
          <div className="modal-content form-modal">
            <h2>Booking Request - {selectedRoom?.name}</h2>
            <form onSubmit={handleFormSubmit} className="booking-form">
              <div className="form-field">
                <label>Name</label>
                <input type="text" name="ownerName" value={formData.ownerName} onChange={handleInputChange} required />
              </div>

              <div className="form-field">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>

              <div className="form-field">
                <label>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
              </div>

              <div className="form-field">
                <label>Number of Rooms</label>
                <input type="number" name="numberOfRooms" min="1" value={formData.numberOfRooms} onChange={handleInputChange} required />
              </div>

              <div className="form-field">
                <label>Adults</label>
                <input type="number" name="adults" min="0" max="2" value={formData.adults} onChange={handleInputChange} required />
              </div>

              <div className="form-field">
                <label>Children</label>
                <input type="number" name="children" min="0" max="2" value={formData.children} onChange={handleInputChange} required />
              </div>

              <div className="form-field">
                <label>Check-in</label>
                <input type="date" name="checkin" value={formData.checkin} onChange={handleInputChange} required />
              </div>

              <div className="form-field">
                <label>Check-out</label>
                <input type="date" name="checkout" value={formData.checkout} onChange={handleInputChange} required />
              </div>

              <div className="guest-details">
                <label>Guest Names</label>
                {Array.from({ length: totalGuests }).map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={`Guest ${i + 1} name`}
                    value={formData.guestDetails[i] || ""}
                    onChange={(e) => handleGuestDetailChange(e, i)}
                    required
                  />
                ))}
              </div>

              <button type="submit" className="book-button">Submit Request</button>
              <button type="button" className="close-button" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
            {errorMsg && <p className="error-msg">❌ {errorMsg}</p>}
          </div>
        </div>
      )}

      {/* Success Modal */}
      {success && (
        <div className="booking-modal">
          <div className="modal-content">
            <FaCheckCircle size={40} color="green" />
            <p>Booking Request Submitted! A confirmation email has been sent.</p>
          </div>
        </div>
      )}

      {/* Reviews */}
      <div className="review-section">
        <Reviews />
      </div>
    </div>
  );
};

export default Booking;
