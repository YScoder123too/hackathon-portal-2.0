// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./judgeShared.css";

// const initialSubmissions = [
//   { id: 1, team: "CodeCrafters", hack: "Code the Future 2025", status: "pending" },
//   { id: 2, team: "Tech Titans", hack: "Innovate to Elevate", status: "pending" },
//   { id: 3, team: "Innovative Minds", hack: "Build Beyond Limits", status: "reviewed" },
//   { id: 4, team: "Binary Builders", hack: "Code the Future 2025", status: "pending" },
//   { id: 5, team: "Dev Dynasty", hack: "Innovate to Elevate", status: "reviewed" },
// ];

// function Submissions() {
//   const [submissions] = useState(initialSubmissions);
//   const navigate = useNavigate();

//   return (
//     <div className="judge-page">
//       <h1 className="page-heading">Submissions</h1>
//       <p className="page-sub">Review team submissions assigned to you.</p>

//       <div className="submissions-list">
//         {submissions.map((s) => (
//           <div key={s.id} className="submission-list-row">
//             <div className="submission-list-avatar"></div>
//             <div className="submission-list-info">
//               <div className="submission-list-team">{s.team}</div>
//               <div className="submission-list-hack">{s.hack}</div>
//             </div>
//             <span className={s.status === "pending" ? "badge-pending" : "badge-reviewed"}>
//               {s.status === "pending" ? "Pending" : "Reviewed"}
//             </span>
//             <button
//               className="btn-review"
//               onClick={() => navigate("/judge/score", { state: { team: s.team, hack: s.hack } })}
//             >
//               {s.status === "pending" ? "Review" : "View Score"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Submissions;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./judgeShared.css";
import { getSubmissions } from "../../utils/judgeMockStore";

function Submissions() {
  const [submissions] = useState(getSubmissions());
  const navigate = useNavigate();

  return (
    <div className="judge-page">
      <h1 className="page-heading">Submissions</h1>
      <p className="page-sub">Review team submissions assigned to you.</p>

      <div className="submissions-list">
        {submissions.map((s) => (
          <div key={s.id} className="submission-list-row">
            <div className="submission-list-avatar"></div>
            <div className="submission-list-info">
              <div className="submission-list-team">{s.team}</div>
              <div className="submission-list-hack">{s.hack}</div>
            </div>
            <span className={s.status === "pending" ? "badge-pending" : "badge-reviewed"}>
              {s.status === "pending" ? "Pending" : `Reviewed · ${s.score}/100`}
            </span>
            <button
              className="btn-review"
              onClick={() => navigate("/judge/score", { state: { submissionId: s.id } })}
            >
              {s.status === "pending" ? "Review" : "Edit Score"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Submissions;