import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import "./AdminLayout.css";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="admin-layout">
      {/* Overlay — visible on mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="admin-main">
        <Topbar
          onMenuClick={() => setSidebarOpen((prev) => !prev)}
          userName={user?.name || "Admin"}
          userRole="Administrator"
        />
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;