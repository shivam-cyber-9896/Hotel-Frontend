import React from 'react';
import './NearbyAttraction.css';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const attractions = [
  {
    title: 'Timber Trail',
    distance: '16.83 mi / 27.09 km',
    description: 'Connect with nature during a visit to Timber Trail in the Shivalik hills.',
    image: './images/nearby/dest1.jpg',
    map: 'https://www.google.com/maps?q=Timber+Trail+Chandigarh',
    rating: 4.5
  },
  {
    title: 'Elante Mall',
    distance: '4.67 mi / 7.51 km',
    description: 'Shop your favorite brands and dine at numerous restaurants.',
    image: './images/nearby/dest2.jpg',
    map: 'https://www.google.com/maps?q=Elante+Mall+Chandigarh',
    rating: 4.3
  },
  {
    title: 'Zakir Hussain Rose Garden',
    distance: '7.65 mi / 12.32 km',
    description: 'The largest rose garden in Asia with 1,500+ varieties of roses.',
    image: './images/nearby/dest3.jpg',
    map: 'https://www.google.com/maps?q=Rose+Garden+Chandigarh',
    rating: 4.7
  },
  {
    title: 'Sukhna Lake',
    distance: '6.88 mi / 11.07 km',
    description: 'Enjoy boating and beautiful scenery at this peaceful reservoir.',
    image: './images/nearby/dest4.webp',
    map: 'https://www.google.com/maps?q=Sukhna+Lake+Chandigarh',
    rating: 4.6
  },
  {
    title: 'Sector 17 Market',
    distance: '7.09 mi / 11.40 km',
    description: 'Upscale shops, trendy restaurants, and vibrant bars await.',
    image: './images/nearby/dest5.jpg',
    map: 'https://www.google.com/maps?q=Sector+17+Market+Chandigarh',
    rating: 4.2
  },
  {
    title: 'ISKCON Chandigarh',
    distance: '7.11 mi / 11.44 km',
    description: 'Visit this peaceful temple known for lively weekend festivals.',
    image: './images/nearby/dest6.jpg',
    map: 'https://www.google.com/maps?q=ISKCON+Temple+Chandigarh',
    rating: 4.4
  },
  {
    title: 'Government Museum and Art Gallery',
    distance: '7.72 mi / 12.42 km',
    description: 'Browse ancient art, miniatures, and Gandharan sculptures.',
    image: './images/nearby/dest7.webp',
    map: 'https://www.google.com/maps?q=Government+Museum+Chandigarh',
    rating: 4.1
  },
  {
    title: 'Funcity',
    distance: '5.45 mi / 8.77 km',
    description: 'Theme and water park fun for all ages.',
    image: './images/nearby/dest8.jpg',
    map: 'https://www.google.com/maps?q=Funcity+Chandigarh',
    rating: 4.0
  },
  {
    title: 'Rock Garden',
    distance: '8.00 mi / 12.87 km',
    description: 'Art made from recycled materials, created by Nek Chand.',
    image: './images/nearby/dest9.webp',
    map: 'https://www.google.com/maps?q=Rock+Garden+Chandigarh',
    rating: 4.8
  }
];

const NearbyAttractions = () => {
  return (
    <div className="attractions-container">
      <h2 className="attractions-title">Nearby Attractions</h2>

      <div className="attractions-grid">
        {attractions.map((item, i) => (
          <div key={i} className="attraction-card">
            <img src={item.image} alt={item.title} className="attraction-image" />
            <div className="attraction-details">
              <h3 className="attraction-title">{item.title}</h3>
              <p className="attraction-distance">
                <FaMapMarkerAlt style={{ color: '#999', marginRight: '6px' }} />{item.distance}
              </p>
              <p className="attraction-description">{item.description}</p>
              <div className="rating-stars">
                {[...Array(5)].map((_, star) => (
                  <FaStar key={`star-${i}-${star}`} style={{ color: star < Math.round(item.rating) ? '#f5b301' : '#ddd', marginRight: '2px' }} />
                ))}
              </div>
              <a href={item.map} target="_blank" rel="noopener noreferrer" className="map-link">
                View on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23638.45647392651!2d76.765259!3d30.638153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed43f79fc7b5%3A0x3153b52fd9b6a5d4!2sRadisson%20Chandigarh%20Zirakpur!5e0!3m2!1sen!2sin!4v1699080000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="map-iframe"
          allowFullScreen=""
          loading="lazy"
          title="Chandigarh Map"
        ></iframe>
      </div>
    </div>
  );
};

export default NearbyAttractions;
