import "./UpcomingHackathons.css";

const hackathons = [
  {
    title: "AI Innovation Challenge",
    registrations: 342,
    startDate: "15 Aug 2026",
    status: "Open",
    progress: 75,
  },
  {
    title: "CodeSprint 2026",
    registrations: 198,
    startDate: "25 Aug 2026",
    status: "Review",
    progress: 55,
  },
  {
    title: "HackVerse",
    registrations: 421,
    startDate: "10 Sep 2026",
    status: "Live",
    progress: 90,
  },
];

function UpcomingHackathons() {
  return (
    <div className="dashboard-card upcoming-section">

      <div className="section-header">
        <h4>Upcoming & Active Hackathons</h4>
      </div>

      <div className="hackathon-list">

        {hackathons.map((hackathon, index) => (
          <div
            className="hackathon-card"
            key={index}
          >

            <div className="hackathon-top">

              <div>
                <h5>{hackathon.title}</h5>
                <p>
                  {hackathon.registrations} Registrations
                </p>
              </div>

              <span
                className={`status-badge ${hackathon.status.toLowerCase()}`}
              >
                {hackathon.status}
              </span>

            </div>

            <div className="hackathon-meta">

              <span>
                Start Date: {hackathon.startDate}
              </span>

            </div>

            <div className="progress-bar-wrapper">

              <div
                className="progress-bar-fill"
                style={{
                  width: `${hackathon.progress}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default UpcomingHackathons;