import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ParticipantSidebar from "../components/layout/ParticipantSidebar";
import Topbar from "../components/layout/Topbar";
import "./AdminLayout.css";

function ParticipantLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="admin-layout">
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <ParticipantSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="admin-main">
        <Topbar
          onMenuClick={() => setSidebarOpen((prev) => !prev)}
          userName={user?.name || "Participant"}
          userRole="Participant"
        />
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ParticipantLayout;