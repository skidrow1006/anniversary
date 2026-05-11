import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './ProfilePage.css';
import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import anniversaryVideo from '../images/Anniversary.mp4';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif = location.state?.backgroundGif || "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif";
  const yearLabel = location.state?.yearLabel || "Year 1";

  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => setShowVideo(true);

  const handleClose = () => {
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <div className="profile-page" style={{ backgroundImage: `url(${backgroundGif})` }}>
        <ProfileBanner yearLabel={yearLabel} onPlayVideo={handlePlayVideo} />
      </div>
      <TopPicksRow yearLabel={yearLabel} onPlayVideo={handlePlayVideo} />

      {showVideo && (
        <div className="video-modal-overlay" onClick={handleClose}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={handleClose}>✕</button>
            <video
              ref={videoRef}
              src={anniversaryVideo}
              controls
              autoPlay
              className="video-modal-player"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
