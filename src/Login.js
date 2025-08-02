import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="login-container">
      <video autoPlay muted loop className="video-bg">
        <source src="/videos/about.mp4" type="video/mp4" />
      </video>

      <div className="black-overlay"></div>

      <div className="login-content">
        {/* 👈 Left Intro */}
        <div className="login-left">
          <h1>Welcome to Radisson Login</h1>
          <p>
            Experience world-class hospitality at Radisson Chandigarh Zirakpur. <br />
            Sign in to manage your bookings, unlock exclusive member rates, and earn rewards. <br />
            Join now to explore unforgettable stays and global benefits across our hotel family.
          </p>
        </div>

        {/* 👉 Right Form */}
        <div className="login-form-box">
          <h2>{isSignUp ? 'Create Account' : 'Member Login'}</h2>
          <form>
            {isSignUp && (
              <>
                <input type="text" placeholder="Full Name" required />
                <input type="tel" placeholder="Phone Number" required />
                <input type="text" placeholder="Promotional Code OPTIONAL" />
                <input type="text" placeholder="Corporate Account ID OPTIONAL" />
              </>
            )}
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
          </form>

          <p className="toggle-link">
            {isSignUp ? 'Already a member?' : "Don't have an account?"}
            <span onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? ' Login' : ' Sign Up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
