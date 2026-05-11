import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import Gallery from './pages/Gallery';
import Letter from './pages/Letter';
import Layout from './Layout';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
      <Route path="/letter" element={<Layout><Letter /></Layout>} />
    </Routes>
  );
};

export default App;
