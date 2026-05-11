import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from './images/netflix-logo.svg';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <img
        src={logoImage}
        alt="Netflix"
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
      />
    </div>
  );
};

export default NetflixTitle;
