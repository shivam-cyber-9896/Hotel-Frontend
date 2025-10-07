import React from 'react';
import './MeetingsEvents.css';

const events = [
  {
    name: 'Corporate Conferences',
    description: 'State-of-the-art conference halls with capacity up to 500 guests. Equipped with advanced AV systems, high-speed WiFi, and dedicated event coordinators.',
    image: '/images/events/corporate.jpg',
  },
  {
    name: 'Dream Weddings',
    description: 'Create unforgettable memories with our luxury wedding venues. From intimate ceremonies to grand celebrations, we offer customized packages with expert wedding planners.',
    image: '/images/events/wedding.jpg',
  },
  {
    name: 'Board Meetings & Seminars',
    description: 'Professional boardrooms and seminar halls for 10-100 participants. Includes catering services, presentation equipment, and breakout spaces.',
    image: '/images/events/boardroom.jpg',
  },
  {
    name: 'Social Celebrations',
    description: 'Celebrate birthdays, anniversaries, and special milestones in our elegant banquet halls. Customized decor, catering, and entertainment options available.',
    image: '/images/events/social.jpg',
  },
  {
    name: 'Product Launches',
    description: 'Launch your brand in style with our versatile event spaces. Professional lighting, stage setup, and media support for impactful presentations.',
    image: '/images/events/launch.jpg',
  },
  {
    name: 'Team Building Events',
    description: 'Strengthen your team with our outdoor and indoor activity spaces. Includes adventure activities, workshops, and team bonding experiences.',
    image: '/images/events/teambuilding.jpg',
  },
];

function MeetingsEvents() {
  return (
    <div className="meetings-events-container">
      <h1>Meetings & Events</h1>
      <p>Host your next event with us. We offer a range of services to make your event a success.</p>
      <div className="meetings-events-grid">
        {events.map((event, index) => (
          <div key={index} className="meeting-event-card">
            <img src={event.image} alt={event.name} className="meeting-event-image" />
            <div className="meeting-event-info">
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <button className="btn-request-quote">Request a Quote</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetingsEvents;
