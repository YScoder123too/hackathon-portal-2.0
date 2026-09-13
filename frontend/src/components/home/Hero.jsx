import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSearch = () => {
    document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-inner">
      <div className="hero-content">
        <h1 className="hero-title">
          Build. Innovate.<br />
          <span className="accent-text">Inspire.</span>
        </h1>
        <p className="hero-subtitle">
          Codways Hackathon Portal is your gateway to exciting hackathons, collaboration, and innovation.
          <span className="highlight-text"> Compete. Learn. Create Impact.</span>
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={scrollToSearch}>Explore Hackathons &rarr;</button>
          <button className="btn-secondary">
            How It Works <span className="play-icon">&#9658;</span>
          </button>
        </div>

        <div className="hero-features">
          <div className="feature-pill">
            <span className="pill-icon">🏆</span>
            <div>
              <strong>Exciting Prizes</strong>
              <p>Win amazing rewards</p>
            </div>
          </div>
          <div className="feature-pill">
            <span className="pill-icon">👥</span>
            <div>
              <strong>Learn &amp; Network</strong>
              <p>Connect with experts</p>
            </div>
          </div>
          <div className="feature-pill">
            <span className="pill-icon">&lt;/&gt;</span>
            <div>
              <strong>Build Real Solutions</strong>
              <p>Solve real-world problems</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-graphic-container">
        <div className="abstract-card main-card wobble-slow">
          <div className="card-header-mock">&lt;/&gt;</div>
          <div className="card-body-mock">
            <div className="mock-line" style={{ width: '60%' }} />
            <div className="mock-line" style={{ width: '80%' }} />
            <div className="mock-line" style={{ width: '45%' }} />
            <div className="mock-line accent" style={{ width: '55%' }} />
            <div className="mock-line" style={{ width: '70%' }} />
          </div>
        </div>
        <div className="abstract-card floating-card-left wobble-medium" />
        <div className="abstract-card floating-card-right wobble-fast">🏆</div>
      </div>
      </div>
    </section>
  );
};

export default Hero;