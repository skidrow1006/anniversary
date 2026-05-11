import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import year1Image from '../images/year1.jpeg';
import year3Image from '../images/year3.jpeg';
import year7Image from '../images/year7.jpeg';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "Year 1",
      image: year1Image,
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif"
    },
    {
      name: "Year 3",
      image: year3Image,
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif"
    },
    {
      name: "Year 7",
      image: year7Image,
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif"
    },
  ];

  const handleProfileClick = (profile: { name: string; image: string; backgroundGif: string }) => {
    const slug = profile.name.toLowerCase().replace(' ', '-');
    navigate(`/profile/${slug}`, { state: { profileImage: profile.image, backgroundGif: profile.backgroundGif, yearLabel: profile.name } });
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Relive Our Journey</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
