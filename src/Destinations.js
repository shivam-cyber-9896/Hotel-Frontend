import React from 'react';
import './Destinations.css';

const destinations = [
  {
    name: 'Chandigarh, India',
    description: 'Experience the planned city of Chandigarh with modern architecture and beautiful gardens. Our hotel offers luxury stays near Rock Garden and Sukhna Lake.',
    image: '/images/destinations/chandigarh.jpg',
    website: 'https://www.radissonhotels.com/en-us/hotels/radisson-chandigarh-zirakpur',
  },
  {
    name: 'New Delhi, India',
    description: 'Discover the capital city with its rich history, vibrant culture, and world-class dining. Stay at our premium hotels near India Gate and Connaught Place.',
    image: '/images/destinations/delhi.jpg',
    website: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-new-delhi-dwarka',
  },
  {
    name: 'Mumbai, India',
    description: 'Immerse yourself in the city of dreams. Our hotels are located near business districts and iconic landmarks like Gateway of India.',
    image: '/images/destinations/mumbai.jpg',
    website: 'https://www.radissonhotels.com/en-us/hotels/radisson-mumbai-andheri-east',
  },
  {
    name: 'Goa, India',
    description: 'Relax on pristine beaches and enjoy the vibrant nightlife. Our beachfront properties offer the perfect tropical getaway.',
    image: '/images/destinations/OIP.webp',
    website: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-goa',
  },
  {
    name: 'Jaipur, India',
    description: 'Explore the Pink City with its magnificent palaces and forts. Stay in luxury while experiencing royal Rajasthani hospitality.',
    image: '/images/destinations/jaipur.webp',
    website: 'https://www.radissonhotels.com/en-us/hotels/radisson-jaipur-city-center',
  },
  {
    name: 'Bangalore, India',
    description: 'The Silicon Valley of India offers modern amenities and pleasant weather. Perfect for business and leisure travelers.',
    image: '/images/destinations/ban.jpg',
    website: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-bangalore',
  },
];

function Destinations() {
  return (
    <div className="destinations-container">
      <h1>Our Destinations</h1>
      <p>Explore our hotels in amazing destinations around the world.</p>
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <div className="destination-info">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              <a href={destination.website} target="_blank" rel="noopener noreferrer" className="btn-book-now">Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
