import { useState, useEffect } from "react";
import { getAllUsers } from "../../app/api/authApi";
import "./adminHackathons.css";

function AdminParticipants() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await getAllUsers();
      setUsers(res.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load participants");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="admin-hackathons-page">Loading participants...</div>;
  if (error) return <div className="admin-hackathons-page">{error}</div>;

  return (
    <div className="admin-hackathons-page">
      <div className="admin-hackathons-header">
        <div>
          <h1>Participants</h1>
          <p>All registered participants on the platform.</p>
        </div>
      </div>

      <div className="hackathon-table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Joined On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={4}>No participants have registered yet.</td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u._id}>
                  <td>{u.fullName}</td>
                  <td>{u.email}</td>
                  <td>{new Date(u.createdAt).toLocaleDateString()}</td>
                  <td>
                    <span className="status-pill status-completed">{u.status}</span>
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

export default AdminParticipants;