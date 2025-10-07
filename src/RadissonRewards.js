import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RadissonRewards.css';

const RadissonRewards = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    window.open('https://www.radissonhotels.com/en-us/rewards/join', '_blank', 'noopener,noreferrer');
  };

  const handleViewMembership = () => {
    // Navigate to membership overview page
    navigate('/');
    // Scroll to membership section after navigation
    setTimeout(() => {
      const membershipSection = document.querySelector('.membership-section');
      if (membershipSection) {
        membershipSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  return (
    <div className="rewards-page">
      {/* Hero */}
      <section className="hero">
        <h1>Radisson Rewards</h1>
        <p>
          More points. More possibilities. Discover how fast and easy it is to earn and redeem points with Radisson Rewards.
        </p>
        <a href="https://www.radissonhotels.com/en-us/rewards" target="_blank" rel="noopener noreferrer" className="btn-join">Join Now</a>
      </section>

      {/* What Sets Us Apart */}
      <section className="section gray">
        <h2>What sets us apart?</h2>
        <p>
          Radisson Rewards is designed to guarantee memorable moments by rewarding your loyalty with truly relevant benefits every day. As a Radisson Rewards member, you unlock a world of exclusive benefits across a wide range of our hotels and destinations.
        </p>
        <div className="benefits-list">
          <div className="benefit-point">
            <h4>✓ Instant Member Benefits</h4>
            <p>Start saving from your very first stay with member-only rates and exclusive offers.</p>
          </div>
          <div className="benefit-point">
            <h4>✓ Earn Points Everywhere</h4>
            <p>Earn 20 points per USD spent on eligible stays. Bonus points on dining, spa, and more.</p>
          </div>
          <div className="benefit-point">
            <h4>✓ Flexible Redemption</h4>
            <p>Use points for free nights, room upgrades, dining vouchers, or charitable donations.</p>
          </div>
          <div className="benefit-point">
            <h4>✓ No Blackout Dates</h4>
            <p>Redeem your points anytime, anywhere across our global portfolio of hotels.</p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="join-now">
        <h2>Join Radisson Rewards</h2>
        <p>Elevate your stay and start enjoying our exclusive member-only benefits today!</p>
        <a href="https://www.radissonhotels.com/en-us/rewards/join" target="_blank" rel="noopener noreferrer" className="btn-join">Join Us</a>
      </section>

      {/* How It Works */}
      <section className="section white">
        <h2>How it works</h2>
        <p>
          Radisson Rewards members get access to a wide range of truly relevant member-only benefits. Enjoy easy earning and the flexibility to choose how and when you want to be rewarded. Getting rewarded has never been easier!
        </p>
      </section>

      {/* Member Offers */}
      <section className="section gray">
        <h2>Exclusive Member Offers</h2>
        <p>
          As a Radisson Rewards member, you enjoy access to exclusive offers and promotions that can accelerate your earning potential, give you more redemption opportunities, partners offers, and so much more.
        </p>
        <a href="https://www.radissonhotels.com/en-us/rewards/offers" target="_blank" rel="noopener noreferrer">See all the offers &gt;</a>
      </section>

      {/* Hero Video Section */}
      <section className="video-section">
        <div className="video-container">
          <video autoPlay muted loop className="rewards-video">
            <source src="/videos/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <h2>Experience Luxury Rewards</h2>
            <p>Watch how our members enjoy exclusive benefits worldwide</p>
            <button className="btn-watch" onClick={handleViewMembership}>View Membership Tiers</button>
          </div>
        </div>
      </section>

      {/* Member Benefits Grid */}
      <section className="benefit-grid">
        <div className="benefit-item">
          <img src="/images/poster/poster2.avif" alt="Luxury Hotel Experience" />
          <h3>Member Only Rate</h3>
          <p>Members save up to 15% on their stays in more than 800 properties in Europe, the Middle East, Africa, and Asia Pacific.</p>
          <a href="https://www.radissonhotels.com/en-us/rewards/member-rates" target="_blank" rel="noopener noreferrer">See more</a>
        </div>
        <div className="benefit-item">
          <img src="/images/poster/poster3.webp" alt="Premium Suite" />
          <h3>Award Nights</h3>
          <p>Use any combination of points and cash to enjoy discounts or a free Award Night.</p>
          <a href="https://www.radissonhotels.com/en-us/rewards/award-nights" target="_blank" rel="noopener noreferrer">See more</a>
        </div>
        <div className="benefit-item">
          <img src="/images/poster/mem23.avif" alt="Member Benefits" />
          <h3>Sharing is Rewarding</h3>
          <p>Refer a friend and both receive 1,000 bonus points after their first stay.</p>
          <a href="https://www.radissonhotels.com/en-us/rewards/referral" target="_blank" rel="noopener noreferrer">See more</a>
        </div>
      </section>

      {/* Earn & Redeem */}
      <section className="section white">
        <h2>Explore more ways to earn and redeem points with our partners</h2>
        <div className="double-cards">
          <div className="mini-card">
            <h3>Earn Points</h3>
            <p>Earn beyond hotel stays. Shop, travel, and much more with our partners to earn points you can redeem faster.</p>
            <a href="https://www.radissonhotels.com/en-us/rewards/earn-points" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
          <div className="mini-card">
            <h3>Redeem Points</h3>
            <p>Use your points for travel benefits, lounge access, and charitable donations.</p>
            <a href="https://www.radissonhotels.com/en-us/rewards/redeem-points" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
        </div>
      </section>

      {/* Membership Tiers CTA */}
      <section className="membership-cta">
        <div className="cta-content">
          <div className="cta-text">
            <h3>Ready to Choose Your Membership Tier?</h3>
            <p>Explore our Club, Gold, and Platinum membership options with exclusive benefits tailored to your travel style.</p>
            <button className="btn-view-tiers" onClick={handleViewMembership}>
              View Membership Tiers
            </button>
          </div>
          <div className="cta-image">
            <img src="/images/Brand/bran1.png" alt="Radisson Rewards" />
          </div>
        </div>
      </section>

      {/* FAQ Prompt */}
      <section className="faq-cta">
        <h3>Want to know more about Radisson Rewards?</h3>
        <p>Check out our FAQ section on everything our program has to offer.</p>
        <button className="btn-faq" onClick={handleJoinClick}>Join Now & Get Started</button>
      </section>
    </div>
  );
};

export default RadissonRewards;
