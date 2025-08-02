import React from 'react';
import './RadissonRewards.css';

const RadissonRewards = () => {
  return (
    <div className="rewards-page">
      {/* Hero */}
      <section className="hero">
        <h1>Radisson Rewards</h1>
        <p>
          More points. More possibilities. Discover how fast and easy it is to earn and redeem points with Radisson Rewards.
        </p>
        <button>Join Now</button>
      </section>

      {/* What Sets Us Apart */}
      <section className="section gray">
        <h2>What sets us apart?</h2>
        <p>
          Radisson Rewards is designed to guarantee memorable moments by rewarding your loyalty with truly relevant benefits every day. As a Radisson Rewards member, you unlock a world of exclusive benefits across a wide range of our hotels and destinations.
        </p>
      </section>

      {/* Join CTA */}
      <section className="join-now">
        <h2>Join Radisson Rewards</h2>
        <p>Elevate your stay and start enjoying our exclusive member-only benefits today!</p>
        <button>Join Us</button>
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
        <a href="#">See all the offers &gt;</a>
      </section>

      {/* Member Benefits Grid */}
      <section className="benefit-grid">
        <div className="benefit-item">
          <img src="https://www.radissonhotels.com/static/img/rhg-rewards-page/benefit-1.jpg" alt="Mykonos" />
          <h3>Member Only Rate</h3>
          <p>Members save up to 15% on their stays in more than 800 properties in Europe, the Middle East, Africa, and Asia Pacific.</p>
          <a href="#">See more</a>
        </div>
        <div className="benefit-item">
          <img src="https://www.radissonhotels.com/static/img/rhg-rewards-page/benefit-2.jpg" alt="Maldives" />
          <h3>Award Nights</h3>
          <p>Use any combination of points and cash to enjoy discounts or a free Award Night.</p>
          <a href="#">See more</a>
        </div>
        <div className="benefit-item">
          <img src="https://www.radissonhotels.com/static/img/rhg-rewards-page/benefit-3.jpg" alt="Couple enjoying lounge" />
          <h3>Sharing is Rewarding</h3>
          <p>Refer a friend and both receive 1,000 bonus points after their first stay.</p>
          <a href="#">See more</a>
        </div>
      </section>

      {/* Earn & Redeem */}
      <section className="section white">
        <h2>Explore more ways to earn and redeem points with our partners</h2>
        <div className="double-cards">
          <div className="mini-card">
            <h3>Earn Points</h3>
            <p>Earn beyond hotel stays. Shop, travel, and much more with our partners to earn points you can redeem faster.</p>
            <a href="#">Learn more</a>
          </div>
          <div className="mini-card">
            <h3>Redeem Points</h3>
            <p>Use your points for travel benefits, lounge access, and charitable donations.</p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </section>

      {/* FAQ Prompt */}
      <section className="faq-cta">
        <h3>Want to know more about Radisson Rewards?</h3>
        <p>Check out our FAQ section on everything our program has to offer.</p>
      </section>
    </div>
  );
};

export default RadissonRewards;
