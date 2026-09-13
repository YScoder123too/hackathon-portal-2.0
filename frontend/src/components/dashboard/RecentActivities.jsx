import "./RecentActivities.css";

const activities = [
  {
    title: "AI Innovation Challenge",
    action: "New team registered",
    time: "5 mins ago",
  },
  {
    title: "CodeSprint 2026",
    action: "Project submitted",
    time: "15 mins ago",
  },
  {
    title: "HackVerse",
    action: "Judge assigned",
    time: "1 hour ago",
  },
  {
    title: "DataQuest",
    action: "Announcement published",
    time: "2 hours ago",
  },
];

function RecentActivities() {
  return (
    <div className="dashboard-card">

      <div className="section-header">
        <h4>Recent Activities</h4>
      </div>

      <div className="activity-list">

        {activities.map((item, index) => (
          <div
            className="activity-item"
            key={index}
          >
            <div className="activity-dot" />

            <div>
              <h6>{item.action}</h6>
              <p>{item.title}</p>
            </div>

            <span>{item.time}</span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentActivities;