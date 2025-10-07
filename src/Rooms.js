import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaWifi, FaTv, FaSnowflake, FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import "./Rooms.css";

const roomData = [
  {
    name: "Superior Room",
    size: "33 m²",
    capacity: "3 adults",
    bed: "1 king or 2 twin",
    images: [
      "/images/room/superior1.webp",
      "/images/room/sup2.avif",
      "/images/room/sup3.avif",
      "/images/room/sup4.avif",
      
      "/images/room/sup5.avif","/images/room/sup6.avif",
    ],
    facilities: ["wifi", "tv", "ac"],
  },
  {
    name: "Deluxe Room",
    size: "37 m²",
    capacity: "3 adults",
    bed: "1 king or 2 twin",
    images: [
      "/images/room/delux/del1.avif",
      "/images/room/delux/del2.avif",
      "/images/room/delux/del3.avif",
      "/images/room/delux/del4.avif",
      
    ],
    facilities: ["wifi", "tv", "ac"],
  },
  {
    name: "Business Class Room",
    size: "42 m²",
    capacity: "3 adults, 1 child (0–12)",
    bed: "1 king",
     images: [
      "/images/room/superior1.webp",
      "/images/room/sup2.avif",
      "/images/room/sup3.avif",
      "/images/room/sup4.avif",
      
      "/images/room/sup5.avif","/images/room/sup6.avif",
    ],
    facilities: ["wifi", "tv", "ac"],
  },
  {
    name: "Executive Suite",
    size: "52 m²",
    capacity: "3 adults",
    bed: "1 king",
    images: [
      "/images/room/delux/del1.avif",
      "/images/room/delux/del2.avif",
      "/images/room/delux/del3.avif",
      "/images/room/delux/del4.avif",
      
    ],
    facilities: ["wifi", "tv", "ac"],
  },
  {
    name: "Presidential Suite",
    size: "70 m²",
    capacity: "4 adults",
    bed: "1 king + 1 twin",
    images: [
      "/images/room/superior1.webp",
      "/images/room/sup2.avif",
      "/images/room/sup3.avif",
      "/images/room/sup4.avif",
      
      "/images/room/sup5.avif","/images/room/sup6.avif",
    ],
    facilities: ["wifi", "tv", "ac"],
  },
];

const Rooms = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState({});

  // Auto image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => {
        const updated = {};
        roomData.forEach((room, i) => {
          updated[i] = prev[i] !== undefined ? (prev[i] + 1) % room.images.length : 1;
        });
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const facilityIcon = (facility) => {
    switch (facility) {
      case "wifi":
        return <FaWifi />;
      case "tv":
        return <FaTv />;
      case "ac":
        return <FaSnowflake />;
      default:
        return null;
    }
  };

  return (
    <div className="rooms-container">
      <h2 className="rooms-title">Room Types</h2>

      {/* Video Section */}
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
        {roomData.map((room, idx) => {
          const imgIndex = carouselIndex[idx] || 0;

          return (
            <div className="room-card" key={idx}>
              <div className="room-image">
                <img src={room.images[imgIndex]} alt={room.name} />
              </div>

              <div className="room-content">
                <h3 className="room-name">{room.name}</h3>
                <p className="room-details">{room.size}</p>
                <p className="room-details">{room.capacity}</p>
                <p className="room-details">{room.bed}</p>

                <div className="room-facilities">
                  {room.facilities.map((fac, i) => (
                    <span key={i} className="facility-icon">{facilityIcon(fac)}</span>
                  ))}
                </div>

                <button className="book-btn" onClick={() => navigate("/booking")}>
                  Book Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
