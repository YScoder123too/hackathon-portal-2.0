// ─────────────────────────────────────────────────────────────
// TEMPORARY MOCK DATA STORE — hackathon/submission backend
// doesn't exist yet, only auth is real. This makes the participant
// dashboard feel dynamic using localStorage, same pattern as
// judgeMockStore.js. Once real hackathon/team/submission APIs
// exist, replace these functions with actual axios calls — the
// Dashboard page won't need to change structure, just how these
// functions fetch data.
// ─────────────────────────────────────────────────────────────

const KEY = "mock_participant_data";

const seedData = {
  registeredHackathons: [
    {
      id: 1,
      title: "Code the Future 2025",
      teamName: "CodeCrafters",
      teamStatus: "Team Complete",
      startDate: "10 May 2025",
      submissionDeadline: "24 May 2025",
      status: "In Progress",
      progress: 60,
    },
    {
      id: 2,
      title: "Innovate to Elevate",
      teamName: "Tech Titans",
      teamStatus: "Looking for 1 member",
      startDate: "1 Jun 2025",
      submissionDeadline: "19 Jun 2025",
      status: "Upcoming",
      progress: 20,
    },
    {
      id: 3,
      title: "Build Beyond Limits",
      teamName: "Innovative Minds",
      teamStatus: "Team Complete",
      startDate: "5 Apr 2025",
      submissionDeadline: "29 Apr 2025",
      status: "Completed",
      progress: 100,
    },
  ],
};

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

export function getRegisteredHackathons() {
  return readStore().registeredHackathons;
}

export function getStats() {
  const data = readStore().registeredHackathons;
  const active = data.filter((h) => h.status === "In Progress" || h.status === "Upcoming");
  const completed = data.filter((h) => h.status === "Completed");

  // Nearest upcoming deadline among active hackathons
  const upcomingDeadlines = active
    .map((h) => new Date(h.submissionDeadline))
    .sort((a, b) => a - b);
  const nextDeadline = upcomingDeadlines.length
    ? upcomingDeadlines[0].toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    : "—";

  return {
    totalRegistered: data.length,
    activeCount: active.length,
    completedCount: completed.length,
    nextDeadline,
  };
}

// Handy for demo resets if data gets messy during a walkthrough
export function resetMockData() {
  writeStore(seedData);
}