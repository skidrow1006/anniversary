import React from 'react';
import { FaCamera } from 'react-icons/fa';
import './Gallery.css';

import gal1 from '../images/gal_1.jpeg';
import gal2 from '../images/gal_2.jpeg';
import gal3 from '../images/gal_3.jpeg';
import gal4 from '../images/gal_4.jpeg';
import gal5 from '../images/gal_5.jpeg';
import year1 from '../images/year1.jpeg';
import year3 from '../images/year3.jpeg';
import year7 from '../images/year7.jpeg';

const photos = [
  { src: year1, caption: "Year 1" },
  { src: gal1, caption: "A Memory" },
  { src: gal2, caption: "A Memory" },
  { src: year3, caption: "Year 3" },
  { src: gal3, caption: "A Memory" },
  { src: gal4, caption: "A Memory" },
  { src: year7, caption: "Year 7" },
  { src: gal5, caption: "A Memory" },
];

const Gallery: React.FC = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <FaCamera className="gallery-icon" />
        <h2 className="gallery-title">Our Gallery</h2>
        <p className="gallery-subtitle">A collection of moments that made us, us</p>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-card">
            <img src={photo.src} alt={photo.caption} className="gallery-img" />
            <div className="gallery-overlay">
              <p className="gallery-caption">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
