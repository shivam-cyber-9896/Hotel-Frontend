import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from './Top';
import RadissonRewards from './RadissonRewards';
import Home from './Home';
import Booking from './Booking';
import Login from './Login';
import Footer from './Footer';
import Deals from './Deals';

function App() {
  return (
    <>
      <Top />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lang" element={<RadissonRewards />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
         <Route path="/deals" element={<Deals/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
