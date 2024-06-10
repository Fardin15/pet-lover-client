import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const handleLinkClick = () => {
    const drawerToggle = document.getElementById("my-drawer-2");
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };
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
          <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink onClick={handleLinkClick} to="/dashboard/users">
                    Users
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleLinkClick} to="/dashboard/addPet">
                    Add A Pet
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleLinkClick} to="/dashboard/addedPets">
                    My Added Pets
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleLinkClick} to="/dashboard/allPets">
                    All Pets
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleLinkClick}
                    to="/dashboard/adoptionRequest"
                  >
                    Adoption Request
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleLinkClick}
                    to="/dashboard/createCampaign"
                  >
                    Create Donation Campaign
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleLinkClick} to="/dashboard/myCampaign">
                    My Donation Campaigns
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleLinkClick}
                    to="/dashboard/myDonations"
                  >
                    My Donations
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleLinkClick}
                    to="/dashboard/allDonations"
                  >
                    All Donations
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink onClick={handleLinkClick} to="/dashboard/addPet">
                    Add A Pet
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleLinkClick} to="/dashboard/addedPets">
                    My Added Pets
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleLinkClick}
                    to="/dashboard/adoptionRequest"
                  >
                    Adoption Request
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleLinkClick}
                    to="/dashboard/createCampaign"
                  >
                    Create Donation Campaign
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleLinkClick} to="/dashboard/myCampaign">
                    My Donation Campaigns
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleLinkClick}
                    to="/dashboard/myDonations"
                  >
                    My Donations
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
