import { useState, useEffect } from "react";
import { getMyTeams } from "../../app/api/teamApi";
import { upsertSubmission, finalizeSubmission, getMySubmissions } from "../../app/api/submissionApi";
import "./participantDashboard.css";

function MyTeam() {
  const [teams, setTeams] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formState, setFormState] = useState({}); // { [hackathonId]: {projectTitle, description, repoLink, demoLink} }
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [teamsRes, subsRes] = await Promise.all([getMyTeams(), getMySubmissions()]);
      setTeams(teamsRes.data.data);
      setSubmissions(subsRes.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load team data");
    } finally {
      setLoading(false);
    }
  };

  const getSubmissionFor = (hackathonId) =>
    submissions.find((s) => s.hackathon?._id === hackathonId);

  const handleFormChange = (hackathonId, field, value) => {
    setFormState((prev) => ({
      ...prev,
      [hackathonId]: { ...prev[hackathonId], [field]: value },
    }));
  };

  const handleSaveDraft = async (hackathonId) => {
    try {
      const data = formState[hackathonId] || {};
      await upsertSubmission({ hackathonId, ...data });
      setStatusMsg("Draft saved!");
      fetchData();
    } catch (err) {
      setStatusMsg(err.response?.data?.message || "Failed to save draft");
    }
  };

  const handleFinalSubmit = async (submissionId) => {
    try {
      await finalizeSubmission(submissionId);
      setStatusMsg("Submitted successfully!");
      fetchData();
    } catch (err) {
      setStatusMsg(err.response?.data?.message || "Failed to submit");
    }
  };

  if (loading) return <div className="participant-content">Loading your team...</div>;
  if (error) return <div className="participant-content">{error}</div>;

  if (teams.length === 0) {
    return (
      <div className="participant-content">
        <h1 className="welcome-heading">My Team</h1>
        <p className="welcome-sub">You haven't joined or created a team yet. Head to "My Hackathons" to get started.</p>
      </div>
    );
  }

  return (
    <div className="participant-content">
      <h1 className="welcome-heading">My Team</h1>
      <p className="welcome-sub">Manage your teams and submissions.</p>

      {statusMsg && <div className="status-banner">{statusMsg}</div>}

      {teams.map((team) => {
        const submission = getSubmissionFor(team.hackathon._id);
        const draft = formState[team.hackathon._id] || {};

        return (
          <div className="dashboard-card my-hackathons-section" key={team._id} style={{ marginBottom: 20 }}>
            <div className="section-header">
              <h4>{team.hackathon.title}</h4>
            </div>
            <div className="hackathon-meta" style={{ marginBottom: 16 }}>
              <span>Team: {team.name}</span>
              <span>Team Code: {team.teamCode}</span>
              <span>Members: {team.members.map((m) => m.fullName).join(", ")}</span>
              <span>Leader: {team.leader.fullName}</span>
            </div>

            <h5 style={{ marginBottom: 10 }}>Project Submission</h5>

            {submission?.status === "Submitted" ? (
              <div className="status-banner">
                ✅ Submitted: <strong>{submission.projectTitle}</strong> on{" "}
                {new Date(submission.submittedAt).toLocaleString()}
              </div>
            ) : (
              <div className="team-form" style={{ flexDirection: "column", alignItems: "stretch", gap: 10 }}>
                <input
                  type="text"
                  placeholder="Project title"
                  defaultValue={submission?.projectTitle || ""}
                  onChange={(e) => handleFormChange(team.hackathon._id, "projectTitle", e.target.value)}
                />
                <textarea
                  placeholder="Description"
                  defaultValue={submission?.description || ""}
                  onChange={(e) => handleFormChange(team.hackathon._id, "description", e.target.value)}
                  rows={3}
                />
                <input
                  type="text"
                  placeholder="Repository link"
                  defaultValue={submission?.repoLink || ""}
                  onChange={(e) => handleFormChange(team.hackathon._id, "repoLink", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Demo link (optional)"
                  defaultValue={submission?.demoLink || ""}
                  onChange={(e) => handleFormChange(team.hackathon._id, "demoLink", e.target.value)}
                />
                <div className="hackathon-actions">
                  <button onClick={() => handleSaveDraft(team.hackathon._id)}>Save Draft</button>
                  {submission && (
                    <button onClick={() => handleFinalSubmit(submission._id)}>Final Submit</button>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MyTeam;