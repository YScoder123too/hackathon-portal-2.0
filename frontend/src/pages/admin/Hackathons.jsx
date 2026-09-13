import { useState, useEffect } from "react";
import {
  getHackathons,
  createHackathon,
  updateHackathon,
  deleteHackathon,
} from "../../app/api/hackathonApi";
import "./adminHackathons.css";

const emptyForm = {
  title: "",
  description: "",
  problemStatement: "",
  techStack: "",
  startDate: "",
  endDate: "",
  submissionDeadline: "",
  mode: "Online",
  status: "Upcoming",
};

function AdminHackathons() {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
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
      setStatusMsg(err.response?.data?.message || "Failed to load hackathons");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const openCreateForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
  };

  const openEditForm = (h) => {
    setForm({
      title: h.title,
      description: h.description,
      problemStatement: h.problemStatement || "",
      techStack: h.techStack || "",
      startDate: h.startDate?.slice(0, 10),
      endDate: h.endDate?.slice(0, 10),
      submissionDeadline: h.submissionDeadline?.slice(0, 10),
      mode: h.mode,
      status: h.status,
    });
    setEditingId(h._id);
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateHackathon(editingId, form);
        setStatusMsg("Hackathon updated successfully!");
      } else {
        await createHackathon(form);
        setStatusMsg("Hackathon created successfully!");
      }
      setShowForm(false);
      fetchHackathons();
    } catch (err) {
      setStatusMsg(err.response?.data?.message || "Failed to save hackathon");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this hackathon? This cannot be undone.")) return;
    try {
      await deleteHackathon(id);
      setStatusMsg("Hackathon deleted.");
      fetchHackathons();
    } catch (err) {
      setStatusMsg(err.response?.data?.message || "Failed to delete hackathon");
    }
  };

  if (loading) return <div className="admin-hackathons-page">Loading hackathons...</div>;

  return (
    <div className="admin-hackathons-page">
      <div className="admin-hackathons-header">
        <div>
          <h1>Manage Hackathons</h1>
          <p>Create and manage hackathons for participants to join.</p>
        </div>
        <button className="primary-btn" onClick={openCreateForm}>
          + Create Hackathon
        </button>
      </div>

      {statusMsg && <div className="status-banner">{statusMsg}</div>}

      {showForm && (
        <div className="hackathon-form-card">
          <h3>{editingId ? "Edit Hackathon" : "Create Hackathon"}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Mode</label>
                <select value={form.mode} onChange={(e) => handleChange("mode", e.target.value)}>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                required
                rows={3}
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Problem Statement</label>
              <textarea
                rows={3}
                placeholder="What problem should participants solve?"
                value={form.problemStatement}
                onChange={(e) => handleChange("problemStatement", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Tech Stack</label>
              <input
                type="text"
                placeholder="e.g. React, Node.js, MongoDB (comma separated)"
                value={form.techStack}
                onChange={(e) => handleChange("techStack", e.target.value)}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  required
                  value={form.startDate}
                  onChange={(e) => handleChange("startDate", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="date"
                  required
                  value={form.endDate}
                  onChange={(e) => handleChange("endDate", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Submission Deadline</label>
                <input
                  type="date"
                  required
                  value={form.submissionDeadline}
                  onChange={(e) => handleChange("submissionDeadline", e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Status</label>
                <select value={form.status} onChange={(e) => handleChange("status", e.target.value)}>
                  <option value="Upcoming">Upcoming</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="primary-btn">
                {editingId ? "Update" : "Create"}
              </button>
              <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="hackathon-table-card">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Dates</th>
              <th>Deadline</th>
              <th>Mode</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {hackathons.map((h) => (
              <tr key={h._id}>
                <td>{h.title}</td>
                <td>
                  {new Date(h.startDate).toLocaleDateString()} -{" "}
                  {new Date(h.endDate).toLocaleDateString()}
                </td>
                <td>{new Date(h.submissionDeadline).toLocaleDateString()}</td>
                <td>{h.mode}</td>
                <td>
                  <span className={`status-pill status-${h.status.toLowerCase().replace(" ", "-")}`}>
                    {h.status}
                  </span>
                </td>
                <td>
                  <button className="link-btn" onClick={() => openEditForm(h)}>
                    Edit
                  </button>
                  <button className="link-btn danger" onClick={() => handleDelete(h._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminHackathons;