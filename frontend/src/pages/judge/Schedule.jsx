import "./judgeShared.css";

const schedule = [
  { time: "10:00 AM", title: "Live Judging Round — Code the Future 2025", sub: "12 teams to review", tag: "live", tagLabel: "Live" },
  { time: "2:00 PM", title: "Score Submission Deadline", sub: "Build Beyond Limits", tag: "deadline", tagLabel: "Deadline" },
  { time: "4:30 PM", title: "Judges Sync Meeting", sub: "Google Meet", tag: "meeting", tagLabel: "Meeting" },
  { time: "Tomorrow, 11:00 AM", title: "Live Judging Round — Innovate to Elevate", sub: "8 teams to review", tag: "live", tagLabel: "Live" },
];

const tagClass = {
  live: "tag-live",
  deadline: "tag-deadline",
  meeting: "tag-meeting",
};

function Schedule() {
  return (
    <div className="judge-page">
      <h1 className="page-heading">Schedule</h1>
      <p className="page-sub">Your upcoming judging events and deadlines.</p>

      <div className="schedule-list">
        {schedule.map((item, i) => (
          <div key={i} className="schedule-row">
            <div className="schedule-time">{item.time}</div>
            <div className="schedule-info">
              <div className="schedule-title">{item.title}</div>
              <div className="schedule-sub">{item.sub}</div>
            </div>
            <span className={`schedule-tag ${tagClass[item.tag]}`}>{item.tagLabel}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;