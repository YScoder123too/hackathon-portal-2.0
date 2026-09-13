import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./HeroBanner.css";

function HeroBanner() {
  const navigate = useNavigate();

  return (
    <section className="hero-banner">
      <div className="hero-content">
        <span className="hero-badge">
          CODWAYS ADMIN PORTAL
        </span>
        <h1>
          Welcome Back 👋
        </h1>
        <p>
          Manage hackathons, participants,
          judges and submissions from one
          centralized workspace.
        </p>
        <div className="hero-actions">
          <button
            className="primary-btn"
            onClick={() => navigate("/admin/hackathons")}
          >
            Create Hackathon
          </button>
          <button
            className="secondary-btn"
            onClick={() => toast.info("Analytics dashboard is coming soon!")}
          >
            View Analytics
          </button>
        </div>
      </div>
      <div className="hero-mascot">
        🤖
      </div>
    </section>
  );
}

export default HeroBanner;