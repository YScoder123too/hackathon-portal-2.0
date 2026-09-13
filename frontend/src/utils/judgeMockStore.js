// ─────────────────────────────────────────────────────────────
// TEMPORARY MOCK DATA STORE — no real backend/database exists yet.
// This makes the judge panel feel dynamic (scoring updates the
// leaderboard and dashboard stats live) using localStorage.
// Once the real backend is ready, replace these functions with
// actual API calls (axios) — the pages that use this store
// (Dashboard, Submissions, Score, Leaderboard) won't need to
// change their structure, just how these functions fetch/save data.
// ─────────────────────────────────────────────────────────────

const KEY = "mock_judge_submissions";

const seedData = [
  { id: 1, team: "CodeCrafters", hack: "Code the Future 2025", status: "pending", score: null, breakdown: null, feedback: "" },
  { id: 2, team: "Tech Titans", hack: "Innovate to Elevate", status: "pending", score: null, breakdown: null, feedback: "" },
  { id: 3, team: "Innovative Minds", hack: "Build Beyond Limits", status: "reviewed", score: 89, breakdown: { innovation: 22, execution: 23, design: 21, impact: 23 }, feedback: "Strong execution, clean UI." },
  { id: 4, team: "Binary Builders", hack: "Code the Future 2025", status: "pending", score: null, breakdown: null, feedback: "" },
  { id: 5, team: "Dev Dynasty", hack: "Innovate to Elevate", status: "reviewed", score: 94, breakdown: { innovation: 24, execution: 24, design: 23, impact: 23 }, feedback: "Excellent, most innovative idea so far." },
];

function readStore() {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    localStorage.setItem(KEY, JSON.stringify(seedData));
    return seedData;
  }
  return JSON.parse(raw);
}

function writeStore(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function getSubmissions() {
  return readStore();
}

export function getSubmissionById(id) {
  return readStore().find((s) => s.id === Number(id));
}

export function submitScore(id, breakdown, feedback) {
  const data = readStore();
  const total = Object.values(breakdown).reduce((a, b) => a + b, 0);
  const updated = data.map((s) =>
    s.id === Number(id) ? { ...s, status: "reviewed", score: total, breakdown, feedback } : s
  );
  writeStore(updated);
  return updated.find((s) => s.id === Number(id));
}

export function getLeaderboard() {
  return readStore()
    .filter((s) => s.status === "reviewed")
    .sort((a, b) => b.score - a.score)
    .map((s, i) => ({ rank: i + 1, team: s.team, hack: s.hack, score: s.score }));
}

export function getStats() {
  const data = readStore();
  const pending = data.filter((s) => s.status === "pending");
  const reviewed = data.filter((s) => s.status === "reviewed");
  const assignedHackathons = new Set(data.map((s) => s.hack)).size;
  const avgScore = reviewed.length
    ? Math.round(reviewed.reduce((sum, s) => sum + s.score, 0) / reviewed.length)
    : 0;

  return {
    assignedHackathons,
    pendingCount: pending.length,
    reviewedCount: reviewed.length,
    avgScore,
  };
}

export function getHackathonSummary() {
  const data = readStore();
  const hackMap = {};
  data.forEach((s) => {
    if (!hackMap[s.hack]) hackMap[s.hack] = { name: s.hack, teams: 0, pending: 0 };
    hackMap[s.hack].teams += 1;
    if (s.status === "pending") hackMap[s.hack].pending += 1;
  });
  return Object.values(hackMap);
}

// Handy for demo resets if scoring gets messy during a walkthrough
export function resetMockData() {
  writeStore(seedData);
}