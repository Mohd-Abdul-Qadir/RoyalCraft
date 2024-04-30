import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgClose, CgSearch } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <div className="main-navbar">
          <ul className="navbar-link">
            <li>
              <NavLink
                to="/"
                className="link"
                onClick={() => setOpenMenu(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="link"
                onClick={() => setOpenMenu(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className="link"
                onClick={() => setOpenMenu(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="link"
                onClick={() => setOpenMenu(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="main-search">
            <input placeholder="Search" />
            <CgSearch className="search-icon" />
          </div>

          <div className="social--icons">
            <div className="icon">
              <HiOutlineMail className="icons" />
            </div>
            <div className="icon">
              <FiPhone className="icons" />
            </div>
          </div>
        </div>
        {/* <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgClose
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
