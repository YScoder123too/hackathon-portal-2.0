import HeroBanner from "../../components/dashboard/HeroBanner";
import StatCard from "../../components/dashboard/StatCard";
import RecentActivities from "../../components/dashboard/RecentActivities";
import QuickActions from "../../components/dashboard/QuickActions";
import UpcomingHackathons from "../../components/dashboard/UpcomingHackathons";
import {
  FaTrophy,
  FaUsers,
  FaFolderOpen,
  FaUserTie,
} from "react-icons/fa";

function Dashboard() {
  return (
    <>
      <HeroBanner />

      <div className="row g-4">

        <div className="col-md-6 col-xl-3">
          <StatCard
            title="Active Hackathons"
            value="12"
            growth="+18%"
            icon={<FaTrophy />}
          />
        </div>

        <div className="col-md-6 col-xl-3">
          <StatCard
            title="Participants"
            value="542"
            growth="+24%"
            icon={<FaUsers />}
          />
        </div>

        <div className="col-md-6 col-xl-3">
          <StatCard
            title="Submissions"
            value="87"
            growth="+10%"
            icon={<FaFolderOpen />}
          />
        </div>

        <div className="col-md-6 col-xl-3">
          <StatCard
            title="Judges"
            value="15"
            growth="+5%"
            icon={<FaUserTie />}
          />
        </div>

      </div>
      <div className="row mt-4">

  <div className="col-lg-8">
    <RecentActivities />
  </div>

  <div className="col-lg-4">
    <QuickActions />
  </div>

</div>


<div className="row">

  <div className="col-12">
    <UpcomingHackathons />
  </div>

</div>
    </>
  );
}

export default Dashboard;