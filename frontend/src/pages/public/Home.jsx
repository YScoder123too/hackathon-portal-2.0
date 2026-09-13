import React from 'react';
import Navbar from '../../components/common/Navbar';
import Hero from '../../components/home/Hero';
import SearchBar from '../../components/home/SearchBar';
import FeaturedHackathons from '../../components/home/FeaturedHackathons';
import Stats from '../../components/home/Stats';
import ProcessTimeline from '../../components/home/ProcessTimeline';
import Benefits from '../../components/home/Benefits';
import Footer from '../../components/common/Footer';

const Home = () => {
  return (
    <div className="homepage-wrapper" style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <div
        className="main-content-container"
        style={{ position: 'relative', marginTop: '-60px', zIndex: 10 }}
      >
        <SearchBar />
        <FeaturedHackathons />
        <Stats />
        <ProcessTimeline />
        <Benefits />
      </div>
      <Footer />
    </div>
  );
};

export default Home;