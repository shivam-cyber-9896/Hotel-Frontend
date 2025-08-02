import React, { useEffect } from 'react';

const instagramPosts = [
  'https://www.instagram.com/p/DFri9SApCb8/',
  'https://www.instagram.com/p/DJN-G2Zzqfx/',
  'https://www.instagram.com/reel/DLtneFSTV91/',
  
  // Add more post URLs here if needed
];

const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="instagram"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gap: '40px',
        padding: '60px 40px',
        backgroundColor: '#f2f2f2',
      }}
    >
      {/* Left section: About */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
          About Our Instagram
        </h2>
        <p style={{ fontSize: '16px', color: '#333' }}>
          Explore stunning moments captured at Radisson Chandigarh Zirakpur. From elegant rooms
          to delightful dining experiences and local attractions — stay inspired with our latest
          Instagram updates.
        </p>
      </div>

      {/* Right section: Instagram Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
        }}
      >
        {instagramPosts.map((url, idx) => (
          <blockquote
            key={idx}
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              background: '#fff',
              border: 0,
              borderRadius: '12px',
              boxShadow: '0 0 1px rgba(0,0,0,0.2), 0 4px 15px rgba(0,0,0,0.1)',
              width: '100%',
              minWidth: '300px',
              maxWidth: '540px',
              margin: '0 auto',
            }}
          ></blockquote>
        ))}
      </div>
    </section>
  );
};

export default InstagramEmbed;
