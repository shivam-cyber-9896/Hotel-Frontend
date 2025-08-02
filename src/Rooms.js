import React, { useRef, useState } from 'react';
import './Rooms.css';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const roomData = [
  {
    name: 'Superior Room',
    size: '33 m²',
    capacity: '3 adults',
    bed: '1 king or 2 twin',
    images: [
      '/images/room/superior1.webp',
      '/images/room/sup2.avif',
      '/images/room/sup3.avif',
      '/images/room/sup4.avif',
      '/images/room/sup5.avif',
    ],
  },
  {
    name: 'Deluxe Room',
    size: '37 m²',
    capacity: '3 adults',
    bed: '1 king or 2 twin',
    images: [
      '/images/room/delux/del1.avif',
      '/images/room/delux/del2.avif',
      '/images/room/delux/del3.avif',
      '/images/room/delux/del4.avif',
      '/images/room/delux/del5.avif',
    ],
  },
  {
    name: 'Business Class Room',
    size: '42 m²',
    capacity: '3 adults, 1 child (0–12)',
    bed: '1 king',
    images: [
      '/images/room/bus1.webp',
      '/images/room/bus2.avif',
      '/images/room/bus3.avif',
      '/images/room/bus4.avif',
      '/images/room/bus5.avif',
    ],
  },
  {
    name: 'Executive Suite',
    size: '52 m²',
    capacity: '3 adults',
    bed: '1 king',
    images: [
      '/images/room/exe1.avif',
      '/images/room/exe2.avif',
      '/images/room/exe3.avif',
      '/images/room/exe4.avif',
      '/images/room/exe5.avif',
    ],
  },
  {
    name: 'Presidential Suite',
    size: '70 m²',
    capacity: '4 adults',
    bed: '1 king + 1 twin',
    images: [
      '/images/room/pre1.webp',
      '/images/room/pre2.avif',
      '/images/room/pre3.avif',
      '/images/room/pre4.avif',
      '/images/room/pre5.avif',
    ],
  },
];

const Rooms = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [pauseCarousel, setPauseCarousel] = useState(null);

  const togglePlay = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="rooms-container">
      <h2 className="rooms-title">Room Types</h2>

      {/* Hotel Video Section */}
      <div className="video-card-wrapper">
        <video
          ref={videoRef}
          className="room-video"
          src="/videos/rooms.mp4"
          autoPlay
          loop
          muted={isMuted}
        />
        <div className="video-overlay-text">
          HOTEL TOUR AND REVIEW<br />BY OUR CUSTOMERS
        </div>
        <div className="video-control-overlay">
          <button onClick={togglePlay} className="control-btn">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={toggleMute} className="control-btn">
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
      </div>

      {/* Room Cards */}
      <div className="rooms-grid">
        {roomData.map((room, idx) => (
          <div
            className="room-card glass-card"
            key={idx}
            onMouseEnter={() => setPauseCarousel(idx)}
            onMouseLeave={() => setPauseCarousel(null)}
          >
            <div className="carousel-3d-wrapper">
              <div
                className="carousel-3d"
                style={{
                  animationPlayState: pauseCarousel === idx ? 'paused' : 'running',
                }}
              >
                {room.images.map((img, i) => (
                  <div
                    key={i}
                    className="slide3d"
                    style={{
                      transform: `rotateY(${(i * 360) / room.images.length}deg) translateZ(300px)`,
                    }}
                  >
                    <img src={img} alt={`${room.name} ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="room-content">
              <h3 className="room-name">{room.name}</h3>
              <p className="room-details">{room.size}</p>
              <p className="room-details">{room.capacity}</p>
              <p className="room-details">{room.bed}</p>
              <button className="book-btn" onClick={() => navigate('/booking')}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
