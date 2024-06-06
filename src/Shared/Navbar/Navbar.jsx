import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/pet-listing">Pet Listing</Link>
      </li>
      <li>
        <Link to="/campaigns">Donation Campaigns</Link>
      </li>
      {user ? (
        <></>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-green-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">PetLover</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {/* profile pic and dropdown menu */}
      <div className="navbar-end">
        <details className="dropdown dropdown-end">
          <summary className="m-1">
            <img
              className="rounded-full w-10 h-10 tooltip tooltip-bottom"
              src={
                user?.photoURL
                  ? user?.photoURL
                  : "https://i.postimg.cc/ZKVHTsbW/profile.jpg"
              }
              alt=""
            />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={handleLogOut} className="btn">
                Logout
              </button>
            </li>
            <li>
              <Link to="/dashboard/addPet">Dashboard</Link>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
