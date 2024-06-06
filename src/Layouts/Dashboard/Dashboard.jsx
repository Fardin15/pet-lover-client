import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/addPet">Add A Pet</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addedPets">My Added Pets</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/adoptionRequest">Adoption Request</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/createCampaign">
              Create Donation Campaign
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myCampaign">My Donation Campaigns</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myDonations">My Donations</NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 py-14 px-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
