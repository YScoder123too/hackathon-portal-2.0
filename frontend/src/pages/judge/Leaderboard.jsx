import { useState } from "react";
import "./judgeShared.css";
import { getLeaderboard } from "../../utils/judgeMockStore";

function Leaderboard() {
  const [leaderboard] = useState(getLeaderboard());

  return (
    <div className="judge-page">
      <h1 className="page-heading">Leaderboard</h1>
      <p className="page-sub">Live ranking based on scores submitted so far.</p>

      {leaderboard.length === 0 ? (
        <p className="page-sub">No teams scored yet — leaderboard will populate as you review submissions.</p>
      ) : (
        <div className="leaderboard-list">
          {leaderboard.map((row) => (
            <div
              key={row.rank}
              className={`leaderboard-row ${row.rank === 1 ? "gold" : ""}`}
            >
              <div className="leaderboard-rank">{row.rank}</div>
              <div className="leaderboard-team">
                <div className="leaderboard-team-name">{row.team}</div>
                <div className="leaderboard-team-hack">{row.hack}</div>
              </div>
              <div className="leaderboard-score">{row.score}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Leaderboard;