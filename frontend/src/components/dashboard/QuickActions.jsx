import {
  FaPlus,
  FaBullhorn,
  FaUserTie,
  FaFileExport,
} from "react-icons/fa";

function QuickActions() {
  return (
    <div className="dashboard-card">

      <div className="section-header">
        <h4>Quick Actions</h4>
      </div>

      <div className="quick-actions">

        <button className="action-btn">
          <FaPlus />
          Create Hackathon
        </button>

        <button className="action-btn">
          <FaUserTie />
          Add Judge
        </button>

        <button className="action-btn">
          <FaBullhorn />
          Announcement
        </button>

        <button className="action-btn">
          <FaFileExport />
          Export Report
        </button>

      </div>

    </div>
  );
}

export default QuickActions;