import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFolderOpen,
  FaStar,
  FaListOl,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";
import "./Sidebar.css";

const navItems = [
  { to: "/judge/dashboard",   icon: <FaHome />,       label: "Dashboard"    },
  { to: "/judge/submissions", icon: <FaFolderOpen />, label: "Submissions"  },
  { to: "/judge/score",       icon: <FaStar />,       label: "Score Now"    },
  { to: "/judge/leaderboard", icon: <FaListOl />,     label: "Leaderboard"  },
  { to: "/judge/schedule",    icon: <FaCalendarAlt />,label: "Schedule"     },
];

function JudgeSidebar({ isOpen, onClose }) {
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
        <p>Reach out if you're stuck reviewing a submission.</p>
        <button>Contact Support →</button>
      </div>

    </aside>
  );
}

export default JudgeSidebar;