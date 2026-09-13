import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaBars, FaBell, FaChevronDown, FaSun, FaSignOutAlt } from "react-icons/fa";
import { logout } from "../../features/auth/authSlice";
import "./Topbar.css";

function Topbar({ onMenuClick, userName = "User", userRole = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  const handleSettingsClick = () => {
    toast.info("Settings page is coming soon!");
  };

  const handleBellClick = () => {
    toast.info("Notifications are coming soon!");
  };

  return (
    <header className="topbar">
      <button className="topbar-menu-btn" onClick={onMenuClick} aria-label="Open menu">
        <FaBars />
      </button>
      <div className="topbar-right">
        <FaSun
          className="topbar-icon teal topbar-hide-sm"
          style={{ cursor: "pointer" }}
          onClick={handleSettingsClick}
        />
        <div className="divider topbar-hide-sm" />
        <div className="notification" style={{ cursor: "pointer" }} onClick={handleBellClick}>
          <FaBell className="topbar-icon" />
          <span>3</span>
        </div>
        <div className="divider" />
        <div
          className="profile"
          style={{ position: "relative", cursor: "pointer" }}
          onClick={() => setMenuOpen((p) => !p)}
        >
          <div className="avatar">{userName.charAt(0).toUpperCase()}</div>
          <div className="profile-text">
            <h5>{userName}</h5>
            <span>{userRole}</span>
          </div>
          <FaChevronDown className="topbar-icon topbar-hide-sm" />

          {menuOpen && (
            <div
              style={{
                position: "absolute",
                top: "110%",
                right: 0,
                background: "#fff",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                borderRadius: "8px",
                minWidth: "160px",
                zIndex: 50,
                overflow: "hidden",
              }}
            >
              <button
                onClick={handleLogout}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                  border: "none",
                  background: "none",
                  padding: "12px 16px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  color: "#dc2626",
                  fontWeight: 600,
                }}
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Topbar;