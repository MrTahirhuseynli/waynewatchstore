import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenCollection from './pages/MenCollection';
import WomenCollection from './pages/WomenCollection';
import SmartWatches from './pages/SmartWatches';
import Stores from './pages/Stores';
import ProductList from './pages/ProductList';
import Contact from './pages/Contact';
import WatchCollection from './pages/MenCollection';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Animasyonu 3 saniye sonra sil
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000); // 3 saniye
    return () => clearTimeout(timer);
  }, []);

  if (showAnimation) {
    return (
      <div className="animation-container">
        <img
          src="src/public/rolex_box.webp"
          alt="Rolex Box Animation"
          className="animation-image"
          
        />
      </div>
    );
  }

  return (
    <React.StrictMode>
      <Router>
        <Navigation />
        <Header />
        <div style={{ minHeight: 'calc(100vh - 200px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<MenCollection />} />
            <Route path="/women" element={<WomenCollection />} />
            <Route path="/smartwatches" element={<SmartWatches />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collection" element={<WatchCollection />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};

export default App;
