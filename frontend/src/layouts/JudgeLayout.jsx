import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import JudgeSidebar from "../components/layout/JudgeSidebar";
import Topbar from "../components/layout/Topbar";
import "./AdminLayout.css";

function JudgeLayout() {
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

      <JudgeSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="admin-main">
        <Topbar
          onMenuClick={() => setSidebarOpen((prev) => !prev)}
          userName={user?.name || "Judge"}
          userRole="Judge"
        />

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default JudgeLayout;