// import "./judgedashboard.css";
// import {
//   FaTrophy,
//   FaUsers,
//   FaFolderOpen,
//   FaUserCheck,
//   FaChartBar,
//   FaAward,
//   FaCalendarAlt,
//   FaBullhorn,
// } from "react-icons/fa";

// const stats = [
//   { label: "Assigned Hackathons", value: "4", sub: "2 Active", icon: FaCalendarAlt, color: "#00b4a2" },
//   { label: "Submissions to Review", value: "23", sub: "+6 this week", icon: FaFolderOpen, color: "#f59e0b" },
//   { label: "Reviewed", value: "58", sub: "This month", icon: FaUserCheck, color: "#10b981" },
//   { label: "Avg Score Given", value: "78", sub: "Out of 100", icon: FaTrophy, color: "#3b82f6" },
// ];

// const hackathons = [
//   { name: "Code the Future 2025", dates: "10 May - 25 May 2025", teams: 32, pending: 8, status: "In Progress" },
//   { name: "Innovate to Elevate", dates: "1 Jun - 20 Jun 2025", teams: 21, pending: 21, status: "Upcoming" },
//   { name: "Build Beyond Limits", dates: "5 Apr - 30 Apr 2025", teams: 28, pending: 0, status: "Completed" },
// ];

// const statusClass = {
//   "In Progress": "status-progress",
//   "Upcoming": "status-upcoming",
//   "Completed": "status-completed",
// };

// const recentSubmissions = [
//   { team: "CodeCrafters", hack: "Code the Future 2025" },
//   { team: "Tech Titans", hack: "Innovate to Elevate" },
//   { team: "Innovative Minds", hack: "Build Beyond Limits" },
//   { team: "Binary Builders", hack: "Code the Future 2025" },
// ];

// const quickActions = [
//   { label: "Review Submissions", icon: FaFolderOpen },
//   { label: "Score a Team", icon: FaAward },
//   { label: "View Leaderboard", icon: FaChartBar },
//   { label: "Check Schedule", icon: FaCalendarAlt },
//   { label: "Announcements", icon: FaBullhorn },
// ];

// function Dashboard() {
//   return (
//     <div className="judge-content">
//       <h1 className="welcome-heading">Welcome back, Judge 👋</h1>
//       <p className="welcome-sub">Here's what needs your attention today.</p>

//       <div className="stats-row">
//         {stats.map((s, i) => (
//           <div key={i} className="judge-stat-card">
//             <div
//               className="stat-icon-box"
//               style={{ backgroundColor: `${s.color}1a`, color: s.color }}
//             >
//               <s.icon size={20} />
//             </div>
//             <div className="stat-value">{s.value}</div>
//             <div className="stat-label">{s.label}</div>
//             <div className="stat-sub" style={{ color: s.color }}>{s.sub}</div>
//           </div>
//         ))}
//       </div>

//       <div className="content-grid">
//         <div className="panel hackathons-panel">
//           <div className="panel-header">
//             <h3>Assigned Hackathons</h3>
//             <a className="panel-link">View All</a>
//           </div>
//           <table className="judge-table">
//             <thead>
//               <tr>
//                 <th>Hackathon</th>
//                 <th>Dates</th>
//                 <th>Teams</th>
//                 <th>Pending Reviews</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {hackathons.map((h, i) => (
//                 <tr key={i}>
//                   <td className="hack-name">{h.name}</td>
//                   <td>{h.dates}</td>
//                   <td>{h.teams}</td>
//                   <td>{h.pending}</td>
//                   <td>
//                     <span className={`status-pill ${statusClass[h.status]}`}>
//                       {h.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="panel submissions-panel">
//           <div className="panel-header">
//             <h3>Recent Submissions</h3>
//             <a className="panel-link">View All</a>
//           </div>
//           {recentSubmissions.map((r, i) => (
//             <div key={i} className="submission-row">
//               <div className="submission-avatar"></div>
//               <div>
//                 <div className="submission-team">{r.team}</div>
//                 <div className="submission-hack">{r.hack}</div>
//               </div>
//               <span className="submitted-badge">Pending</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="panel quick-actions-panel">
//         <h3>Quick Actions</h3>
//         <div className="quick-actions-grid">
//           {quickActions.map((q, i) => (
//             <div key={i} className="quick-action-card">
//               <q.icon size={22} />
//               <span>{q.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// export default Dashboard;

import "./judgedashboard.css";
import {
  FaTrophy,
  FaFolderOpen,
  FaUserCheck,
  FaChartBar,
  FaAward,
  FaCalendarAlt,
  FaBullhorn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getStats, getHackathonSummary, getSubmissions } from "../../utils/judgeMockStore";

const quickActions = [
  { label: "Review Submissions", icon: FaFolderOpen, to: "/judge/submissions" },
  { label: "Score a Team", icon: FaAward, to: "/judge/score" },
  { label: "View Leaderboard", icon: FaChartBar, to: "/judge/leaderboard" },
  { label: "Check Schedule", icon: FaCalendarAlt, to: "/judge/schedule" },
  { label: "Announcements", icon: FaBullhorn, to: "/judge/schedule" },
];

function Dashboard() {
  const navigate = useNavigate();
  const stats = getStats();
  const hackathons = getHackathonSummary();
  const recentSubmissions = getSubmissions().slice(-4).reverse();

  const statCards = [
    { label: "Assigned Hackathons", value: stats.assignedHackathons, sub: `${hackathons.length} active`, icon: FaCalendarAlt, color: "#00b4a2" },
    { label: "Submissions to Review", value: stats.pendingCount, sub: "Pending your score", icon: FaFolderOpen, color: "#f59e0b" },
    { label: "Reviewed", value: stats.reviewedCount, sub: "Completed so far", icon: FaUserCheck, color: "#10b981" },
    { label: "Avg Score Given", value: stats.avgScore || "—", sub: "Out of 100", icon: FaTrophy, color: "#3b82f6" },
  ];

  return (
    <div className="judge-content">
      <h1 className="welcome-heading">Welcome back, Judge 👋</h1>
      <p className="welcome-sub">Here's what needs your attention today.</p>

      <div className="stats-row">
        {statCards.map((s, i) => (
          <div key={i} className="judge-stat-card">
            <div
              className="stat-icon-box"
              style={{ backgroundColor: `${s.color}1a`, color: s.color }}
            >
              <s.icon size={20} />
            </div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-sub" style={{ color: s.color }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="content-grid">
        <div className="panel hackathons-panel">
          <div className="panel-header">
            <h3>Assigned Hackathons</h3>
          </div>
          <table className="judge-table">
            <thead>
              <tr>
                <th>Hackathon</th>
                <th>Teams</th>
                <th>Pending Reviews</th>
              </tr>
            </thead>
            <tbody>
              {hackathons.map((h, i) => (
                <tr key={i}>
                  <td className="hack-name">{h.name}</td>
                  <td>{h.teams}</td>
                  <td>{h.pending}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel submissions-panel">
          <div className="panel-header">
            <h3>Recent Submissions</h3>
            <a className="panel-link" onClick={() => navigate("/judge/submissions")}>View All</a>
          </div>
          {recentSubmissions.map((r) => (
            <div key={r.id} className="submission-row">
              <div className="submission-avatar"></div>
              <div>
                <div className="submission-team">{r.team}</div>
                <div className="submission-hack">{r.hack}</div>
              </div>
              <span className="submitted-badge">{r.status === "pending" ? "Pending" : "Reviewed"}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="panel quick-actions-panel">
        <h3>Quick Actions</h3>
        <div className="quick-actions-grid">
          {quickActions.map((q, i) => (
            <div key={i} className="quick-action-card" onClick={() => navigate(q.to)}>
              <q.icon size={22} />
              <span>{q.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;