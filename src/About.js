import React, { useRef, useState } from 'react';
import './About.css';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const photos = [
    "/images/poster/poster3.webp",
    "/images/poster/poster2.avif",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
  ];

  const brandLogos = [
    "/images/Brand/bran1.png",
    "/images/Brand/logo2.png",
    "/images/Brand/OIP.webp"
  ];

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="about-section">
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        className="video-background"
      >
        <source src="/videos/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay-dark"></div>

      <div className="about-overlay">
        <div className="video-controls">
          <button className="control-btn" onClick={togglePlay} title="Play/Pause">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="control-btn" onClick={toggleMute} title="Mute/Unmute">
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>

        <h1 className="about-title">About Radisson</h1>
        <p className="about-subtitle">
          At Radisson, we bring luxury and reliability together. With seamless booking, personalized
          experiences, and global recognition, our platform is built using the MERN stack to offer
          performance, elegance, and unforgettable stays.
        </p>

        <div className="about-gallery">
          {photos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="gallery-image"
              loading="lazy"
            />
          ))}
        </div>

        <h2 className="brand-header">Radisson Brands</h2>
        <div className="brand-container">
          {brandLogos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Brand ${idx + 1}`}
              className="brand-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
