import React from 'react';
import './ProcessTimeline.css';
import { FiEdit3, FiUsers, FiCode, FiAward } from 'react-icons/fi';

const ProcessTimeline = () => {
  const steps = [
    { num: 1, title: 'Register', desc: 'Create your account and join upcoming hackathons.', Icon: FiEdit3 },
    { num: 2, title: 'Form Team', desc: 'Create a team or join an existing one.', Icon: FiUsers },
    { num: 3, title: 'Build & Submit', desc: 'Build your solution and submit your project.', Icon: FiCode },
    { num: 4, title: 'Win & Celebrate', desc: 'Top projects win exciting prizes and recognition.', Icon: FiAward },
  ];

  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">How It Works</h2>
      <div className="timeline-container">
        {steps.map((step, idx) => (
          <div key={idx} className="timeline-card">
            <div className="step-badge-wrapper">
              <div className="number-bubble">{step.num}</div>
              <div className="icon-circle"><step.Icon /></div>
            </div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessTimeline;