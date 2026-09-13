import React from "react";
import HackathonCard from "./HackathonCard";
import codeFutureImg from "../../assets/images/codefuture.jpg";
import innovateImg from "../../assets/images/innovate.jpg";
import buildImg from "../../assets/images/build.jpg";
import aiImg from "../../assets/images/ai.jpg";
import "./FeaturedHackathons.css";

const hackathonsData = [
  {
    id: 1,
    title: "Code the Future 2025",
    description: "Build innovative solutions for real-world problems.",
    image: codeFutureImg,
    date: "May 10 - May 25, 2025",
    participants: "320+ Participants",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Innovate to Elevate",
    description: "Unleash your creativity and solve challenges that matter.",
    image: innovateImg,
    date: "Jun 01 - Jun 20, 2025",
    participants: "210+ Participants",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Build Beyond Limits",
    description: "Push boundaries and build future-ready solutions.",
    image: buildImg,
    date: "Jul 01 - Jul 20, 2025",
    participants: "410+ Participants",
    status: "Live",
  },
  {
    id: 4,
    title: "AI Revolution Hack",
    description: "Create AI-powered solutions that drive change.",
    image: aiImg,
    date: "Aug 01 - Aug 19, 2025",
    participants: "210+ Participants",
    status: "Upcoming",
  },
];

const FeaturedHackathons = () => {
  return (
    <section className="featured-section" id="hackathons" style={{ scrollMarginTop: "20px" }}>
      <div className="section-header">
        <h2>Featured Hackathons</h2>
        <a href="#hackathons" className="view-all-link">View All Hackathons &rarr;</a>
      </div>
      <div className="hackathons-grid">
        {hackathonsData.map((hack) => (
      <HackathonCard
      key={hack.id}
      title={hack.title}
      description={hack.description}
      image={hack.image}
      status={hack.status}
      date={hack.date}
      participants={hack.participants}
    />
  ))}
</div>
    </section>
  );
};

export default FeaturedHackathons;