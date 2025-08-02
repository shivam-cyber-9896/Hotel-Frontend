import React, { useState } from 'react';
import { FaCoffee, FaUtensils, FaWifi, FaSwimmer, FaDumbbell, FaSpa, FaConciergeBell, FaCar, FaBaby, FaBicycle, FaBed, FaBookOpen } from 'react-icons/fa';

const Services = () => {
  const [filter, setFilter] = useState('All');

  const services = [
    { title: 'Breakfast Buffet', desc: 'Start your day with a delicious spread', category: 'Dining', icon: <FaCoffee /> },
    { title: 'On-site Dining', desc: 'Restaurant(s) available on property', category: 'Dining', icon: <FaUtensils /> },
    { title: 'Free Wi-Fi', desc: 'Stay connected everywhere', category: 'Tech', icon: <FaWifi /> },
    { title: 'Outdoor Pool', desc: 'Relax and refresh in our pool', category: 'Recreation', icon: <FaSwimmer /> },
    { title: 'Fitness Center', desc: 'Modern gym for your workout needs', category: 'Wellness', icon: <FaDumbbell /> },
    { title: 'Spa', desc: 'Wellness and beauty treatments', category: 'Wellness', icon: <FaSpa /> },
    { title: 'Concierge Service', desc: 'Personalized guest assistance', category: 'Support', icon: <FaConciergeBell /> },
    { title: 'Parking', desc: 'Free, safe and secure parking', category: 'Support', icon: <FaCar /> },
    { title: 'Kids’ Club', desc: 'Games and activities for children', category: 'Family', icon: <FaBaby /> },
    { title: 'Bicycle Rental', desc: 'Explore nearby places on two wheels', category: 'Recreation', icon: <FaBicycle /> },
    { title: 'Bedding & Pillow Selection', desc: 'Customizable comfort options', category: 'Rooms', icon: <FaBed /> },
    { title: 'Read & Return Library', desc: 'Lending library on-site', category: 'Family', icon: <FaBookOpen /> },
  ];

  const categories = ['All', 'Dining', 'Tech', 'Recreation', 'Wellness', 'Support', 'Family', 'Rooms'];

  const styles = {
    container: {
      padding: '60px 40px',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Segoe UI, sans-serif',
      minHeight: '100vh'
    },
    title: {
      fontSize: '36px',
      textAlign: 'center',
      marginBottom: '30px',
      color: '#555',
      fontWeight: 'bold'
    },
    filterBar: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '15px',
      marginBottom: '40px'
    },
    filterBtn: (active) => ({
      padding: '8px 16px',
      borderRadius: '20px',
      border: '1px solid #ccc',
      backgroundColor: active ? '#333' : '#fff',
      color: active ? '#fff' : '#333',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      boxShadow: active ? '0 0 10px rgba(51,51,51,0.3)' : 'none',
      transform: active ? 'scale(1.05)' : 'scale(1)'
    }),
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px'
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '10px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    },
    icon: {
      fontSize: '24px',
      color: '#777'
    },
    serviceTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#333'
    },
    desc: {
      fontSize: '15px',
      color: '#666'
    }
  };

  const filteredServices = filter === 'All' ? services : services.filter(s => s.category === filter);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Services</h2>

      {/* Filter Buttons */}
      <div style={styles.filterBar}>
        {categories.map((cat, i) => (
          <div
            key={i}
            style={styles.filterBtn(filter === cat)}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Services Grid */}
      <div style={styles.grid}>
        {filteredServices.map((service, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
              e.currentTarget.style.backgroundColor = '#f0f0f0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.05)';
              e.currentTarget.style.backgroundColor = '#fff';
            }}
          >
            <div style={styles.icon}>{service.icon}</div>
            <div style={styles.serviceTitle}>{service.title}</div>
            <div style={styles.desc}>{service.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
