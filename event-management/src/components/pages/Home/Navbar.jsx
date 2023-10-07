import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/SINISTER-LOGO.png";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const navlink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isNonActive }) =>
            isNonActive
              ? "non active"
              : isActive
              ? "text-purple-700 font-bold underline text-xl"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isNonActive }) =>
            isNonActive
              ? "non active"
              : isActive
              ? "text-purple-700 font-bold underline text-xl"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isNonActive }) =>
            isNonActive
              ? "non active"
              : isActive
              ? "text-purple-700 font-bold underline text-xl"
              : ""
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <img className="w-[80px]" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>

        <div className="navbar-end">
          <p>{user?.displayName}</p>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-4">
            <div className="w-10 rounded-full ">
              <img src={user?.photoURL} />
            </div>
          </label>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
