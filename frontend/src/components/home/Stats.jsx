import React from 'react';
import './Stats.css';
import { FaTrophy, FaUsers, FaCode, FaUniversity } from 'react-icons/fa';

const Stats = () => {
  return (
    <div className="stats-strip">
      <div className="stat-box">
        <FaTrophy className="stat-icon" />
        <div className="stat-info">
          <h3>50+</h3>
          <p>Hackathons Organized</p>
        </div>
      </div>
      <div className="stat-box">
        <FaUsers className="stat-icon" />
        <div className="stat-info">
          <h3>10K+</h3>
          <p>Participants</p>
        </div>
      </div>
      <div className="stat-box">
        <FaCode className="stat-icon" />
        <div className="stat-info">
          <h3>2K+</h3>
          <p>Projects Submitted</p>
        </div>
      </div>
      <div className="stat-box">
        <FaUniversity className="stat-icon" />
        <div className="stat-info">
          <h3>100+</h3>
          <p>Partner Organizations</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;