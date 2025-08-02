import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';
import './App.css';
import './BookingBar.css'; 
import { useNavigate } from 'react-router-dom';// We'll add some custom styles here
const BookingBar = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [specialRate, setSpecialRate] = useState("Lowest available rate");
  const [showGuests, setShowGuests] = useState(false);
  const [showRates, setShowRates] = useState(false);
   const navigate = useNavigate();
  const rates = [
    "Lowest available rate",
    "Military/government rate",
    "AAA-CAA rate",
    "Promotional code",
    "Senior citizen rate",
    "Corporate account ID",
    "Travel agency ID",
    "Voucher"
  ];

  return (
    
    <div className="booking-bar-glass">
      {/* Check-in */}
      <div className="form-group">
        <label><FaCalendarAlt /> Check-In</label>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          placeholderText="Select date"
          className="datepicker-input"
          calendarClassName="transparent-calendar"
        />
      </div>

      {/* Check-out */}
      <div className="form-group">
        <label><FaCalendarAlt /> Check-Out</label>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date)}
          selectsEnd
          startDate={checkIn}
          endDate={checkOut}
          minDate={checkIn}
          placeholderText="Select date"
          className="datepicker-input"
          calendarClassName="transparent-calendar"
        />
      </div>

      {/* Rooms & Guests */}
      <div className="form-group">
        <label><FaUser /> Rooms & Guests</label>
        <div
          className="dropdown-box"
          onClick={() => setShowGuests(!showGuests)}
        >
          {rooms} Room, {adults} Adult, {children} Child
        </div>
        {showGuests && (
          <div className="dropdown-overlay">
            {[
              { label: 'Rooms', value: rooms, set: setRooms },
              { label: 'Adults', value: adults, set: setAdults },
              { label: 'Children', value: children, set: setChildren },
            ].map((item, idx) => (
              <div key={idx} className="dropdown-row">
                <span>{item.label}</span>
                <div>
                  <button onClick={() => item.set(Math.max(0, item.value - 1))}>−</button>
                  <span className="px-2">{item.value}</span>
                  <button onClick={() => item.set(item.value + 1)}>+</button>
                </div>
              </div>
            ))}
            <button onClick={() => setShowGuests(false)} className="done-btn">Done</button>
          </div>
        )}
      </div>

      {/* Special Rate */}
      <div className="form-group">
        <label><FaTags /> Special Rates</label>
        <div
          className="dropdown-box"
          onClick={() => setShowRates(!showRates)}
        >
          {specialRate}
        </div>
        {showRates && (
          <div className="dropdown-overlay">
            {rates.map((rate, i) => (
              <div
                key={i}
                className="dropdown-row"
                onClick={() => {
                  setSpecialRate(rate);
                  setShowRates(false);
                }}
              >
                {rate}
              </div>
            ))}
          </div>
        )}
      </div>
       
      {/* Book Now Button */}
      <div className="form-group">
        
      <button className="book-btn" onClick={() => navigate('/booking')}>
                  Book Now
                </button>
      </div>
    </div>
  );
};

export default BookingBar;
