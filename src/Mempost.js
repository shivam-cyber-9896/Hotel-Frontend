import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mempost.css';

const memberships = [
  {
    title: 'Club',
    subtitle: 'Essential',
    image: '/images/poster/club.avif',
    color: 'bronze',
    price: 'Free',
    popular: false,
    nights: '0-9 nights',
    perks: [
      { icon: '💰', text: 'Earn 10 points per $1 spent' },
      { icon: '📶', text: 'Free Wi-Fi at all properties' },
      { icon: '💳', text: 'Member-only rates up to 10% off' },
      { icon: '📱', text: 'Mobile check-in & digital key' },
      { icon: '🎯', text: 'Flexible cancellation' },
    ],
  },
  {
    title: 'Gold',
    subtitle: 'Preferred',
    image: '/images/Brand/bran1.png',
    color: 'gold',
    price: '10+ nights',
    popular: true,
    nights: '10-29 nights',
    perks: [
      { icon: '💎', text: 'Earn 15 points per $1 spent' },
      { icon: '⬆️', text: 'Room upgrades (subject to availability)' },
      { icon: '🕐', text: 'Late checkout until 2 PM' },
      { icon: '☎️', text: 'Priority customer service' },
      { icon: '🎁', text: 'Welcome amenity' },
    ],
  },
  {
    title: 'Platinum',
    subtitle: 'Elite',
    image: '/images/poster/m1.webp',
    color: 'platinum',
    price: '30+ nights',
    popular: false,
    nights: '30+ nights',
    perks: [
      { icon: '🌟', text: 'Earn 20 points per $1 spent' },
      { icon: '🏨', text: 'Suite upgrades when available' },
      { icon: '🍳', text: 'Complimentary breakfast' },
      { icon: '🛋️', text: 'Executive lounge access' },
      { icon: '🤵', text: 'Personal concierge service' },
    ],
  },
];

const Mempost = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTier, setSelectedTier] = useState(1);

  useEffect(() => {
    setIsLoaded(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.membership-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleJoinClick = (tier) => {
    window.open('https://www.radissonhotels.com/en-us/rewards/join', '_blank', 'noopener,noreferrer');
  };

  const handleLearnMore = () => {
    navigate('/lang');
  };

  const handleViewRewards = () => {
    navigate('/lang');
  };

  const handleTierClick = (tier) => {
    // Navigate to rewards page with selected tier
    navigate('/lang', { state: { selectedTier: tier.title } });
  };

  if (!isLoaded) {
    return (
      <div className="membership-section loading">
        <div className="loader">
          <div className="spinner"></div>
          <p>Loading Membership Tiers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="membership-section">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="badge-new">New Member Benefits</div>
          <h1>Radisson Rewards</h1>
          <h2>Membership That Rewards Every Stay</h2>
          <p>Join millions of travelers earning points, enjoying exclusive rates, and unlocking premium experiences at 800+ hotels worldwide.</p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="number">800+</span>
              <span className="label">Hotels</span>
            </div>
            <div className="stat">
              <span className="number">50M+</span>
              <span className="label">Members</span>
            </div>
            <div className="stat">
              <span className="number">20</span>
              <span className="label">Points/$</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <video autoPlay muted loop className="hero-video">
            <source src="/videos/rooms.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Membership Tiers */}
      <div className="tiers-section">
        <div className="section-header">
          <h2>Choose Your Membership Tier</h2>
          <p>Unlock more benefits as you stay more nights per year</p>
        </div>
        
        <div className="membership-grid">
          {memberships.map((tier, index) => (
            <div
              key={index}
              className={`membership-card ${tier.popular ? 'popular' : ''} ${tier.color}`}
              onClick={() => handleTierClick(tier)}
            >
              {tier.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="card-header">
                <div className="tier-icon">
                  <img src={tier.image} alt={tier.title} />
                </div>
                <h3>{tier.title}</h3>
                <p className="subtitle">{tier.subtitle}</p>
                <div className="nights-required">{tier.nights}</div>
              </div>
              
              <div className="card-body">
                <div className="perks-list">
                  {tier.perks.map((perk, i) => (
                    <div key={i} className="perk-item">
                      <span className="perk-icon">{perk.icon}</span>
                      <span className="perk-text">{perk.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card-footer">
                <button 
                  className="join-button"
                  onClick={() => handleJoinClick(tier)}
                >
                  Join {tier.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Overview */}
      <div className="benefits-section">
        <h2>Why Choose Radisson Rewards?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🚀</div>
            <h3>Instant Rewards</h3>
            <p>Start earning points and enjoying member rates from day one. No waiting period required.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🌐</div>
            <h3>Global Network</h3>
            <p>Access exclusive benefits at over 800 hotels across 80+ countries and territories.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💳</div>
            <h3>Flexible Redemption</h3>
            <p>Use points for free nights, upgrades, dining, or even charitable donations.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🎁</div>
            <h3>Exclusive Perks</h3>
            <p>Enjoy member-only rates, room upgrades, and personalized service experiences.</p>
          </div>
        </div>
        
        <div className="cta-section">
          <button className="cta-button" onClick={handleViewRewards}>
            Explore All Rewards Benefits
          </button>
          <button className="cta-button-secondary" onClick={() => window.open('https://www.radissonhotels.com/en-us/rewards', '_blank')}>
            Visit Official Radisson Rewards
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mempost;
