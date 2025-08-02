import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mempost.css';

const memberships = [
  {
    title: 'Club Member',
    image: '/images/poster/club.png',
    color: 'gold',
    perks: [
      'Earn 10 points per $ spent',
      'Free Wi-Fi',
      'Exclusive Member Rates',
      'Flexible Check-In/Out',
    ],
  },
  {
    title: 'VIP Member',
    image: '/images/poster/vip.png',
    color: 'silver',
    perks: [
      '15 points per $ spent',
      'Priority Support',
      'Free Room Upgrade',
      'Early Check-In',
    ],
  },
  {
    title: 'Premium Member',
    image: '/images/poster/premium.png',
    color: 'platinum',
    perks: [
      '20 points per $ spent',
      'Lounge Access',
      'Suite Upgrades',
      'Complimentary Breakfast',
    ],
  },
];

const Mempost = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cards = document.querySelectorAll('.glass-card');
    const reveal = () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          card.classList.add('reveal');
        }
      });
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  const handleClick = () => {
    navigate('/lang');
  };

  return (
    <div className="membership-section">
      <div className="intro-text">
        <h1>Radisson Rewards Membership</h1>
        <p>
          Enjoy world-class perks and privileges with our exclusive membership tiers.
          Choose the plan that suits your travel style and unlock the best of Radisson hospitality.
        </p>
      </div>
      <div className="card-row">
        <img
          src="/images/poster/giphy1.gif"
          alt="Radisson Logo"
          className="radisson-logo"
          onClick={handleClick}
        />
        {memberships.map((tier, index) => (
          <div
            className="glass-card"
            key={index}
            onClick={handleClick}
            title={`Click to view more about ${tier.title}`}
          >
            <div className={`badge ${tier.color.toLowerCase()}`}>{tier.title}</div>
            <img src={tier.image} alt={tier.title} className="card-image" />
            <ul className="perk-list">
              {tier.perks.map((perk, i) => (
                <li key={i} title={perk}>✔️ {perk}</li>
              ))}
            </ul>
            <button className="join-btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mempost;
