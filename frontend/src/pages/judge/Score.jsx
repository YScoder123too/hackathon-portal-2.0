import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./judgeShared.css";
import { getSubmissions, submitScore } from "../../utils/judgeMockStore";

const criteriaList = [
  { key: "innovation", label: "Innovation" },
  { key: "execution", label: "Technical Execution" },
  { key: "design", label: "Design & UX" },
  { key: "impact", label: "Impact" },
];

const defaultScores = { innovation: 15, execution: 15, design: 15, impact: 15 };

function Score() {
  const location = useLocation();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState(getSubmissions());

  const preselectedId = location.state?.submissionId || submissions[0]?.id;
  const [activeId, setActiveId] = useState(preselectedId);

  const activeSubmission = submissions.find((s) => s.id === activeId);
  const [scores, setScores] = useState(activeSubmission?.breakdown || defaultScores);
  const [feedback, setFeedback] = useState(activeSubmission?.feedback || "");
  const [justSubmitted, setJustSubmitted] = useState(false);

  const total = Object.values(scores).reduce((a, b) => a + b, 0);

  const selectTeam = (submission) => {
    setActiveId(submission.id);
    setScores(submission.breakdown || defaultScores);
    setFeedback(submission.feedback || "");
    setJustSubmitted(false);
  };

  const handleSlider = (key, value) => {
    setScores((prev) => ({ ...prev, [key]: Number(value) }));
    setJustSubmitted(false);
  };

  const handleSubmit = () => {
    submitScore(activeId, scores, feedback);
    setSubmissions(getSubmissions()); // refresh so sidebar list + status reflect immediately
    setJustSubmitted(true);
  };

  if (!activeSubmission) {
    return (
      <div className="judge-page">
        <p className="page-sub">No submissions assigned yet.</p>
      </div>
    );
  }

  return (
    <div className="judge-page">
      <h1 className="page-heading">Score Now</h1>
      <p className="page-sub">Rate the submission across each criterion.</p>

      <div className="score-layout">
        <div className="team-select-panel">
          {submissions.map((s) => (
            <div
              key={s.id}
              className={`team-select-item ${s.id === activeId ? "active" : ""}`}
              onClick={() => selectTeam(s)}
            >
              {s.team}
              {s.status === "reviewed" && <span style={{ float: "right", opacity: 0.6 }}>✓</span>}
            </div>
          ))}
        </div>

        <div className="score-panel">
          <h3 style={{ marginBottom: 4, color: "#1a1a2e" }}>Scoring: {activeSubmission.team}</h3>
          <p style={{ marginBottom: 20, fontSize: 13, color: "#6b7280" }}>{activeSubmission.hack}</p>

          {criteriaList.map((c) => (
            <div className="score-criterion" key={c.key}>
              <div className="score-criterion-label">
                <span>{c.label}</span>
                <span className="value">{scores[c.key]} / 25</span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                value={scores[c.key]}
                onChange={(e) => handleSlider(c.key, e.target.value)}
                className="score-slider"
              />
            </div>
          ))}

          <div className="score-total">
            <span>Total Score</span>
            <span className="total-value">{total} / 100</span>
          </div>

          <textarea
            className="feedback-textarea"
            placeholder="Add feedback for the team..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <button className="btn-submit-score" onClick={handleSubmit}>
            {justSubmitted ? "Score Saved ✓" : "Submit Score"}
          </button>
          {justSubmitted && (
            <button
              className="btn-review"
              style={{ marginLeft: 12, background: "transparent", color: "#2869d0", border: "1px solid #2869d0" }}
              onClick={() => navigate("/judge/leaderboard")}
            >
              View Leaderboard →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Score;