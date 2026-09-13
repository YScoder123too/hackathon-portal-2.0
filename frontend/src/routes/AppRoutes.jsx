import { Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import SignUp from "../pages/public/SignUp";
import Unauthorized from "../pages/public/Unauthorized";
import AdminDashboard from "../pages/admin/Dashboard";
import AdminHackathons from "../pages/admin/Hackathons";
import AdminParticipants from "../pages/admin/Participants";
import AdminSubmissions from "../pages/admin/Submissions";
import JudgeDashboard from "../pages/judge/Dashboard";
import JudgeSubmissions from "../pages/judge/Submissions";
import JudgeScore from "../pages/judge/Score";
import JudgeLeaderboard from "../pages/judge/Leaderboard";
import JudgeSchedule from "../pages/judge/Schedule";
import ParticipantDashboard from "../pages/participant/Dashboard";
import ParticipantHackathons from "../pages/participant/Hackathons";
import ParticipantMyTeam from "../pages/participant/MyTeam";
import AdminLayout from "../layouts/AdminLayout";
import JudgeLayout from "../layouts/JudgeLayout";
import ParticipantLayout from "../layouts/ParticipantLayout";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* ================= PUBLIC ================= */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* ================= ADMIN ================= */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="hackathons" element={<AdminHackathons />} />
        <Route path="participants" element={<AdminParticipants />} />
        <Route path="submissions" element={<AdminSubmissions />} />
      </Route>

      {/* ================= JUDGE ================= */}
      <Route
        path="/judge"
        element={
          <ProtectedRoute allowedRoles={["judge"]}>
            <JudgeLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<JudgeDashboard />} />
        <Route path="submissions" element={<JudgeSubmissions />} />
        <Route path="score" element={<JudgeScore />} />
        <Route path="leaderboard" element={<JudgeLeaderboard />} />
        <Route path="schedule" element={<JudgeSchedule />} />
      </Route>

      {/* ================= PARTICIPANT ================= */}
      <Route
        path="/participant"
        element={
          <ProtectedRoute allowedRoles={["participant"]}>
            <ParticipantLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<ParticipantDashboard />} />
        <Route path="hackathons" element={<ParticipantHackathons />} />
        <Route path="team" element={<ParticipantMyTeam />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;