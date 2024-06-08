import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
  const { logOut } = useAuth();
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-centre justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="lg:hidden drawer-button self-start m-5"
          >
            <GiHamburgerMenu />
          </label>
          <div className="px-20 py-20">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/users">Users</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addPet">Add A Pet</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addedPets">My Added Pets</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allPets">All Pets</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/adoptionRequest">
                    Adoption Request
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/createCampaign">
                    Create Donation Campaign
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myCampaign">
                    My Donation Campaigns
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myDonations">My Donations</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allDonations">All Donations</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/addPet">Add A Pet</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addedPets">My Added Pets</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/adoptionRequest">
                    Adoption Request
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/createCampaign">
                    Create Donation Campaign
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myCampaign">
                    My Donation Campaigns
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myDonations">My Donations</NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <button onClick={logOut} className="btn">
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
