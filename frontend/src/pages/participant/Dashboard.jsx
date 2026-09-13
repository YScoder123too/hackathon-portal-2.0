import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StatCard from "../../components/dashboard/StatCard";
import "./participantDashboard.css";
import {
  FaTrophy,
  FaHourglassHalf,
  FaCheckCircle,
  FaCalendarAlt,
} from "react-icons/fa";
import { getMyTeams } from "../../app/api/teamApi";

const statusClass = {
  "In Progress": "status-progress",
  Upcoming: "status-upcoming",
  Completed: "status-completed",
};

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      setLoading(true);
      const res = await getMyTeams();
      setTeams(res.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="participant-content">Loading dashboard...</div>;
  if (error) return <div className="participant-content">{error}</div>;

  const active = teams.filter(
    (t) => t.hackathon.status === "In Progress" || t.hackathon.status === "Upcoming"
  );
  const completed = teams.filter((t) => t.hackathon.status === "Completed");

  const deadlines = active
    .map((t) => new Date(t.hackathon.submissionDeadline))
    .sort((a, b) => a - b);
  const nextDeadline = deadlines.length
    ? deadlines[0].toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    : "—";

  const statCards = [
    { title: "Registered Hackathons", value: teams.length, icon: <FaTrophy /> },
    { title: "Active", value: active.length, icon: <FaHourglassHalf /> },
    { title: "Completed", value: completed.length, icon: <FaCheckCircle /> },
    { title: "Next Deadline", value: nextDeadline, icon: <FaCalendarAlt /> },
  ];

  return (
    <div className="participant-content">
      <h1 className="welcome-heading">
        Welcome back, {user?.fullName || "Participant"} 👋
      </h1>
      <p className="welcome-sub">Here's where your hackathons stand right now.</p>

      <div className="row g-4 stats-row">
        {statCards.map((s, i) => (
          <div key={i} className="col-md-6 col-xl-3">
            <StatCard title={s.title} value={s.value} icon={s.icon} growth="" />
          </div>
        ))}
      </div>

      <div className="dashboard-card my-hackathons-section">
        <div className="section-header">
          <h4>My Hackathons</h4>
        </div>
        {teams.length === 0 ? (
          <p className="welcome-sub">
            No hackathons yet.{" "}
            <a onClick={() => navigate("/participant/hackathons")} style={{ cursor: "pointer", color: "#00b4a2" }}>
              Browse hackathons
            </a>{" "}
            to get started.
          </p>
        ) : (
          <div className="hackathon-list">
            {teams.map((t) => (
              <div className="hackathon-card" key={t._id}>
                <div className="hackathon-top">
                  <div>
                    <h5>{t.hackathon.title}</h5>
                    <p>Team: {t.name}</p>
                  </div>
                  <span className={`status-badge ${statusClass[t.hackathon.status]}`}>
                    {t.hackathon.status}
                  </span>
                </div>
                <div className="hackathon-meta">
                  <span>Starts: {new Date(t.hackathon.startDate).toLocaleDateString()}</span>
                  <span>Submission Deadline: {new Date(t.hackathon.submissionDeadline).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;