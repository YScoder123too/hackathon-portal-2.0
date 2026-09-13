import React from 'react';
import './Benefits.css';
import { FiUsers, FiZap, FiGlobe, FiGift } from 'react-icons/fi';

const Benefits = () => {
  const points = [
    { title: 'Learn & Grow', desc: 'Gain new skills and learn from industry experts.', Icon: FiUsers },
    { title: 'Real Impact', desc: 'Build solutions that create real-world impact.', Icon: FiZap },
    { title: 'Community', desc: 'Connect with like-minded innovators and creators.', Icon: FiGlobe },
    { title: 'Exciting Prizes', desc: 'Win amazing prizes, goodies, and rewards.', Icon: FiGift },
  ];

  return (
    <section className="benefits-section" id="about" style={{ scrollMarginTop: "20px" }}>
      <div className="benefits-left">
        <h2>Why Join Codways Hackathons?</h2>
        <p>Our hackathons are designed to help you learn, collaborate, and grow.</p>
        <button className="btn-join-now">Join Now &rarr;</button>
      </div>
      <div className="benefits-right">
        {points.map((p, idx) => (
          <div key={idx} className="benefit-item-box">
            <div className="benefit-icon-square"><p.Icon /></div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;