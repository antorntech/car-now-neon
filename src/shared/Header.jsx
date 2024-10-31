import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuLeft = [
    {
      label: "About Us",
      path: "/aboutus",
    },
    {
      label: "Discover Automate",
      path: "/discover",
    },
    {
      label: "Fleet",
      path: "/fleet",
    },
  ];

  const menuRight = [
    {
      label: "Long-Term Lease",
      path: "/longtermform",
    },
    {
      label: "Contact Us",
      path: "/contactus",
    },
  ];

  const mainMenu = [
    {
      label: "About Us",
      path: "/aboutus",
    },
    {
      label: "Discover Automate",
      path: "/discover",
    },
    {
      label: "Fleet",
      path: "/fleet",
    },
    {
      label: "Long-Term Lease",
      path: "/longtermform",
    },
    {
      label: "Contact Us",
      path: "/contactus",
    },
  ];
  return (
    <div className="w-full px-5 py-2 overflow-hidden">
      {/* desktop menu */}
      <div className="max-w-screen-xl mx-auto hidden lg:flex justify-between items-center">
        <div className="flex items-center gap-8">
          {menuLeft.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#74EE15] text-[16px] font-semibold transition duration-300"
                    : "text-white text-[16px] font-[500] hover:text-[#74EE15] transition duration-300"
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
        <div>
          <Link to="/">
            <img
              src="/images/logo.jpeg"
              alt="logo.jpeg"
              width={150}
              className="py-1"
            />
          </Link>
        </div>
        <div className="flex items-center gap-8">
          {menuRight.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#74EE15] text-[16px] font-semibold transition duration-300"
                    : "text-white text-[16px] font-[500] hover:text-[#74EE15] transition duration-300"
                }
              >
                {item.label}
              </NavLink>
            );
          })}
          <Link
            to="/fleet"
            className="px-5 py-2 bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white rounded-md shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* mobile menu */}
      <div>
        <div className="py-1 flex items-center justify-between lg:hidden">
          <div className="border-2 border-gray-400 px-2 rounded-md">
            <i
              className={`fa-solid transition-all ease-out duration-500 mt-1 ${
                menuOpen ? "fa-xmark" : "fa-bars"
              } text-[25px] text-gray-600`}
              onClick={() => setMenuOpen(!menuOpen)}
            ></i>
          </div>
          <div>
            <Link to="/">
              <img src="/images/logo.jpeg" alt="logo.jpeg" className="h-10" />
            </Link>
          </div>
          <div>
            <Link
              to="/fleet"
              className="p-2 text-[12px] bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white rounded-md shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile menu container with transition */}
        <div
          className={`flex flex-col gap-2 overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[500px] py-3" : "max-h-0"
          }`}
        >
          {mainMenu.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(!menuOpen)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#74EE15] text-[16px] font-semibold transition duration-300"
                    : "text-black text-[16px] font-[500] hover:text-[#74EE15] transition duration-300"
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
