import { useState, useEffect } from "react";
import { getHackathons } from "../../app/api/hackathonApi";
import { createTeam, joinTeam } from "../../app/api/teamApi";
import "./participantDashboard.css";

function Hackathons() {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeForm, setActiveForm] = useState(null); // { hackathonId, mode: "create" | "join" }
  const [teamName, setTeamName] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    fetchHackathons();
  }, []);

  const fetchHackathons = async () => {
    try {
      setLoading(true);
      const res = await getHackathons();
      setHackathons(res.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load hackathons");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTeam = async (hackathonId) => {
    try {
      await createTeam({ name: teamName, hackathonId });
      setStatusMsg("Team created successfully!");
      setActiveForm(null);
      setTeamName("");
    } catch (err) {
      setStatusMsg(err.response?.data?.message || "Failed to create team");
    }
  };

  const handleJoinTeam = async () => {
    try {
      await joinTeam(teamCode);
      setStatusMsg("Joined team successfully!");
      setActiveForm(null);
      setTeamCode("");
    } catch (err) {
      setStatusMsg(err.response?.data?.message || "Failed to join team");
    }
  };

  if (loading) return <div className="participant-content">Loading hackathons...</div>;
  if (error) return <div className="participant-content">{error}</div>;

  return (
    <div className="participant-content">
      <h1 className="welcome-heading">My Hackathons</h1>
      <p className="welcome-sub">Browse hackathons and set up your team.</p>

      {statusMsg && <div className="status-banner">{statusMsg}</div>}

      <div className="dashboard-card my-hackathons-section">
        <div className="hackathon-list">
          {hackathons.map((h) => (
            <div className="hackathon-card" key={h._id}>
              <div className="hackathon-top">
                <div>
                  <h5>{h.title}</h5>
                  <p>{h.description}</p>
                </div>
                <span className={`status-badge status-${h.status.toLowerCase().replace(" ", "-")}`}>
                  {h.status}
                </span>
              </div>
              <div className="hackathon-meta">
                <span>Starts: {new Date(h.startDate).toLocaleDateString()}</span>
                <span>Submission Deadline: {new Date(h.submissionDeadline).toLocaleDateString()}</span>
                <span>Mode: {h.mode}</span>
              </div>

              {activeForm?.hackathonId === h._id ? (
                <div className="team-form">
                  {activeForm.mode === "create" ? (
                    <>
                      <input
                        type="text"
                        placeholder="Team name"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                      />
                      <button onClick={() => handleCreateTeam(h._id)}>Create Team</button>
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        placeholder="Team code"
                        value={teamCode}
                        onChange={(e) => setTeamCode(e.target.value)}
                      />
                      <button onClick={handleJoinTeam}>Join Team</button>
                    </>
                  )}
                  <button className="cancel-btn" onClick={() => setActiveForm(null)}>Cancel</button>
                </div>
              ) : (
                <div className="hackathon-actions">
                  <button onClick={() => setActiveForm({ hackathonId: h._id, mode: "create" })}>
                    Create Team
                  </button>
                  <button onClick={() => setActiveForm({ hackathonId: h._id, mode: "join" })}>
                    Join Team
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hackathons;