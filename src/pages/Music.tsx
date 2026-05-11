import React from 'react';
import { FaMusic, FaHeart } from 'react-icons/fa';
import './Music.css';

const moods = ["Our Song", "First Dance", "Road Trips", "Lazy Mornings", "Dancing in the Kitchen"];

const songs = [
  { title: "Our Song", artist: "Add your song here", note: "The song that started it all" },
  { title: "A Song for You", artist: "Add your song here", note: "The one that reminds you of us" },
  { title: "Forever Favourite", artist: "Add your song here", note: "The one we never skip" },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <FaHeart style={{ color: '#e50914', marginRight: 8 }} />
        <p>"Some songs are just ours."</p>
      </div>

      <div className="genre-section">
        <h3>Our Playlist Moods</h3>
        <div className="genres">
          {moods.map((mood, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{mood}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Songs That Are Ours</h3>
        <div className="albums">
          {songs.map((song, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <div className="album-placeholder-cover">
                <FaMusic style={{ fontSize: '2.5rem', color: 'rgba(255,255,255,0.3)' }} />
              </div>
              <div className="album-details">
                <h4>{song.title}</h4>
                <p>{song.artist}</p>
                <p style={{ fontSize: '0.75rem', color: '#e91e8c', marginTop: 4 }}>{song.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
