import React from 'react';
import './Resorts.css';

const resorts = [
  {
    name: 'Radisson Blu Resort Goa',
    description: 'Escape to our beachfront paradise with stunning ocean views, infinity pools, and world-class spa facilities. Perfect for romantic getaways and family vacations.',
    image: '/images/resorts/goa.jpg',
    website: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-goa',
  },
  {
    name: 'Radisson Resort Shimla',
    description: 'Experience the beauty of the Himalayas with our mountain resort offering panoramic views, adventure activities, and cozy accommodations.',
    image: '/images/resorts/shimla.webp',
    website: 'https://www.radissonhotels.com/en-us/hotels/radisson-shimla',
  },
  {
    name: 'Radisson Blu Resort Udaipur',
    description: 'Indulge in royal luxury at our lakeside resort in the City of Lakes. Enjoy traditional Rajasthani hospitality with modern amenities.',
    image: '/images/resorts/udaipur.avif',
    website: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-udaipur-palace-resort',
  },
  {
    name: 'Radisson Resort Rishikesh',
    description: 'Find peace and adventure at our riverside resort. Perfect for yoga retreats, river rafting, and spiritual experiences in the Yoga Capital of the World.',
    image: '/images/resorts/rishikesh.webp',
    website: 'https://www.radissonhotels.com/en-us/hotels/radisson-rishikesh',
  },
  {
    name: 'Radisson Blu Resort Alibaug',
    description: 'Unwind at our coastal retreat near Mumbai. Enjoy pristine beaches, water sports, and luxurious villas with private pools.',
    image: '/images/resorts/alibaug.webp',
    website: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-alibaug',
  },
  {
    name: 'Radisson Resort Coorg',
    description: 'Immerse yourself in the coffee plantations of Karnataka. Our resort offers nature trails, plantation tours, and authentic Coorgi cuisine.',
    image: '/images/resorts/coorg.jpg',
    website: 'https://www.radissonhotels.com/en-us/hotels/radisson-coorg',
  },
];

function Resorts() {
  return (
    <div className="resorts-container">
      <h1>Our Resorts</h1>
      <p>Discover our beautiful resorts in the most scenic locations.</p>
      <div className="resorts-grid">
        {resorts.map((resort, index) => (
          <div key={index} className="resort-card">
            <img src={resort.image} alt={resort.name} className="resort-image" />
            <div className="resort-info">
              <h3>{resort.name}</h3>
              <p>{resort.description}</p>
              <a href={resort.website} target="_blank" rel="noopener noreferrer" className="btn-book-now">Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resorts;
