import React, { useState } from 'react';
import './IntroScreen.css';

const IntroScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleEnter = () => {
    setIsVisible(false); // Intro ekranını gizle
  };

  if (!isVisible) {
    return null; // Intro ekranını kaldır
  }

  return (
    <div className="intro-screen">
      <div className="intro-content">
        <img src="/favicon.webp" alt="Wayne Watch Store" className="intro-logo" />
        <button onClick={handleEnter} className="enter-button">
          Enter
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
