import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTrophy,
  FaUsers,
  FaFolderOpen,
  FaBullhorn,
  FaChartBar,
  FaCog,
  FaTimes,
} from "react-icons/fa";
import "./Sidebar.css";

const navItems = [
  { to: "/admin/dashboard", icon: <FaHome />, label: "Dashboard", ready: true },
  { to: "/admin/hackathons", icon: <FaTrophy />, label: "Hackathons", ready: true },
  { to: "/admin/participants", icon: <FaUsers />, label: "Participants", ready: true },
  { to: "/admin/submissions", icon: <FaFolderOpen />, label: "Submissions", ready: true },
  { to: "/admin/announcements", icon: <FaBullhorn />, label: "Announcements", ready: false },
  { to: "/admin/analytics", icon: <FaChartBar />, label: "Analytics", ready: false },
  { to: "/admin/settings", icon: <FaCog />, label: "Settings", ready: false },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
        <FaTimes />
      </button>
      <div className="sidebar-logo">
        <div className="logo-icon">{"</>"}</div>
        <div>
          <h2>Codways</h2>
          <span>Hackathon Portal</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map(({ to, icon, label, ready }) =>
          ready ? (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " active" : "")
              }
              onClick={onClose}
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ) : (
            <div key={to} className="sidebar-link sidebar-link--disabled" title="Coming soon">
              {icon}
              <span>{label}</span>
              <span className="soon-badge">Soon</span>
            </div>
          )
        )}
      </nav>
      <div className="support-card">
        <div className="bot-icon">🤖</div>
        <h4>Need Help?</h4>
        <p>We're here to help you make your hackathon amazing.</p>
        <button>Contact Support →</button>
      </div>
    </aside>
  );
}

export default Sidebar;