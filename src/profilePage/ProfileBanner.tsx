import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { useNavigate } from 'react-router-dom';

const yearMessages: Record<string, { headline: string; summary: string }> = {
  "Year 1": {
    headline: "The Year It All Began",
    summary: "Every love story starts with a single moment. This was ours — the first smiles, the first adventures, and the first time forever felt possible."
  },
  "Year 3": {
    headline: "The Year We Grew Stronger",
    summary: "Through every challenge and every laugh, we found that love isn't just a feeling — it's a choice we make every single day. And we kept choosing each other."
  },
  "Year 7": {
    headline: "The Year We Made It Forever",
    summary: "Seven years of building something beautiful together. Every memory, every moment, every ordinary Tuesday — all of it matters. All of it is us."
  }
};

interface ProfileBannerProps {
  yearLabel: string;
  onPlayVideo: () => void;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ yearLabel, onPlayVideo }) => {
  const navigate = useNavigate();
  const message = yearMessages[yearLabel] || yearMessages["Year 1"];

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline">{message.headline}</h1>
        <p className="banner-description">{message.summary}</p>
        <div className="banner-buttons">
          <PlayButton onClick={onPlayVideo} label="Our Story" />
          <MoreInfoButton onClick={() => navigate('/gallery')} label="Gallery" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
