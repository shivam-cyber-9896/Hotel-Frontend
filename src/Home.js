import React from 'react';
import CircularRooms from './CircularRooms'
import BookingBar from './BookingBar';
import About from './About';
import Services from './Services';
import NearbyAttractions from './NearbyAttraction';
import Rooms from './Rooms';
import Mempost from './Mempost';
import Contact from './Contact';
import InstagramEmbed from './InstagramEmbed';
const Home = () => {
  return (
    <div>
       
      <About />
    <div style={{ paddingTop: '20px' }}>
  <BookingBar />
</div>

 <section id="reservation">
        <Rooms />
      </section>
   
    <section id="services">
  <Services />
</section>
<CircularRooms />
    <NearbyAttractions />
     <Mempost />
     <InstagramEmbed />
     <section id="contact">
     <Contact />
     </section>
    </div>
  );
};

export default Home;
