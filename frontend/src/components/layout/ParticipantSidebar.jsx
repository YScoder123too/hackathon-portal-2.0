import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTrophy,
  FaUsers,
  FaTimes,
} from "react-icons/fa";
import "./Sidebar.css";

const navItems = [
  { to: "/participant/dashboard", icon: <FaHome />, label: "Dashboard" },
  { to: "/participant/hackathons", icon: <FaTrophy />, label: "My Hackathons" },
  { to: "/participant/team", icon: <FaUsers />, label: "My Team" },
];

function ParticipantSidebar({ isOpen, onClose }) {
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
        {navItems.map(({ to, icon, label }) => (
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
        ))}
      </nav>
      <div className="support-card">
        <div className="bot-icon">🤖</div>
        <h4>Need Help?</h4>
        <p>Reach out if you're stuck on anything during the hackathon.</p>
        <button>Contact Support →</button>
      </div>
    </aside>
  );
}

export default ParticipantSidebar;