// import React from "react";
// import "./HackathonCard.css";
// import { FiCalendar, FiUsers } from "react-icons/fi";

// const HackathonCard = ({
//   title = "Code the Future",
//   description = "",
//   image = "https://as1.ftcdn.net/v2/jpg/05/77/04/14/1000_F_577041412_9A0YnuYIe5oSNSjWMuYwmzjw7vGqXq69.jpg",
//   status = "Upcoming",
//   date = "",
//   participants = "",
// }) => {
//   return (
//     <div className="hackathon-card">
//       <div className="card-image">

//     <img src={image} alt={title} />

//     <span className={`status ${status.toLowerCase().replace(/\s+/g,"-")}`}>
//         {status}
//     </span>

//     <div className="card-overlay">

//         <h2>{title}</h2>

//         <span>2025</span>

//     </div>

// </div>

//       <div className="card-body">
//         <h3>{title}</h3>

//         <p>{description}</p>

//        <div className="card-footer">
//   <div><FiCalendar /> {date}</div>
//   <div><FiUsers /> {participants}</div>
// </div>
//       </div>
//     </div>
//   );
// };

// export default HackathonCard;
import React from "react";
import "./HackathonCard.css";
import { FiCalendar, FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HackathonCard = ({
  title = "Code the Future",
  description = "",
  image = "https://as1.ftcdn.net/v2/jpg/05/77/04/14/1000_F_577041412_9A0YnuYIe5oSNSjWMuYwmzjw7vGqXq69.jpg",
  status = "Upcoming",
  date = "",
  participants = "",
}) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleApply = () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: "hackathon-apply", hackathon: title } });
      return;
    }

    // Judges/admins shouldn't land on the participant portal by accident
    if (user?.role && user.role !== "participant") {
      navigate(`/${user.role}/dashboard`);
      return;
    }

    // Logged-in participant — send them into the participant portal
    // (teammate is building this out) with the hackathon they clicked on
    navigate("/participant/dashboard", { state: { applyingTo: title } });
  };

  return (
    <div className="hackathon-card">
      <div className="card-image">

    <img src={image} alt={title} />

    <span className={`status ${status.toLowerCase().replace(/\s+/g,"-")}`}>
        {status}
    </span>

    <div className="card-overlay">

        <h2>{title}</h2>

        <span>2025</span>

    </div>

</div>

      <div className="card-body">
        <h3>{title}</h3>

        <p>{description}</p>

       <div className="card-footer">
  <div><FiCalendar /> {date}</div>
  <div><FiUsers /> {participants}</div>
</div>

        <button className="btn-apply" onClick={handleApply}>
          Apply Now &rarr;
        </button>
      </div>
    </div>
  );
};

export default HackathonCard;