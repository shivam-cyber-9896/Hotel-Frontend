import React from 'react';

import BookingBar from './BookingBar';
import About from './About';
import Services from './Services';
import NearbyAttractions from './NearbyAttraction';
import Rooms from './Rooms';
import Mempost from './Mempost';
import Contact from './Contact';
import InstagramEmbed from './InstagramEmbed';
import Reviews from './Reviews';
const Home = () => {
  return (
    <div>
     
      <About />
    <BookingBar />
 <section id="reservation">
        <Rooms />
      </section>
   
    <section id="services">
  <Services />
</section>
<section id="review">
        <Reviews />
      </section>
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
