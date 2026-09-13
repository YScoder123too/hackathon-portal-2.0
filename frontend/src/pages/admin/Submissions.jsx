import { useState, useEffect } from "react";
import { getAllSubmissions } from "../../app/api/submissionApi";
import "./adminHackathons.css";

function AdminSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const res = await getAllSubmissions();
      setSubmissions(res.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load submissions");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="admin-hackathons-page">Loading submissions...</div>;
  if (error) return <div className="admin-hackathons-page">{error}</div>;

  return (
    <div className="admin-hackathons-page">
      <div className="admin-hackathons-header">
        <div>
          <h1>Submissions</h1>
          <p>All project submissions across every team and hackathon.</p>
        </div>
      </div>

      <div className="hackathon-table-card">
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Team</th>
              <th>Hackathon</th>
              <th>Repo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {submissions.length === 0 ? (
              <tr>
                <td colSpan={5}>No submissions yet.</td>
              </tr>
            ) : (
              submissions.map((s) => (
                <tr key={s._id}>
                  <td>{s.projectTitle}</td>
                  <td>{s.team?.name} ({s.team?.teamCode})</td>
                  <td>{s.hackathon?.title}</td>
                  <td>
                    <a href={s.repoLink} target="_blank" rel="noreferrer">
                      View Repo
                    </a>
                  </td>
                  <td>
                    <span
                      className={`status-pill ${
                        s.status === "Submitted" ? "status-completed" : "status-upcoming"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminSubmissions;