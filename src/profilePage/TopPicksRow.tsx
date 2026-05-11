import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaHeart, FaCamera, FaEnvelope } from 'react-icons/fa';

interface TopPicksRowProps {
  yearLabel: string;
  onPlayVideo: () => void;
}

const TopPicksRow: React.FC<TopPicksRowProps> = ({ yearLabel, onPlayVideo }) => {
  const navigate = useNavigate();

  const anniversaryPicks = [
    { title: "Our Story", imgSrc: "https://picsum.photos/seed/memories/250/200", icon: <FaHeart />, action: onPlayVideo },
    { title: "Gallery", imgSrc: "https://picsum.photos/seed/photos/250/200", icon: <FaCamera />, action: () => navigate('/gallery') },
    { title: "A Letter", imgSrc: "https://picsum.photos/seed/letter/250/200", icon: <FaEnvelope />, action: () => navigate('/letter') },
  ];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Explore {yearLabel} Together</h2>
      <div className="card-row">
        {anniversaryPicks.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={pick.action}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
