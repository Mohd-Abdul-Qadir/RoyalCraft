import React, { useState } from "react";
import "./Header.css";
import Navbar from "./Navbar";
import { CgMenu, CgClose, CgSearch } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

import { HiViewList } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <CgMenu id="menu-icon" />
          <IoClose id="close-icon" />
        </label>
        <nav className="main-navbar">
          <Link className="nav-items" to="/">
            Home
          </Link>
          <Link className="nav-items" to="/">
            Product
          </Link>
          <Link className="nav-items" to="/about">
            About Us
          </Link>
          <Link className="nav-items" to="/contact">
            Contact US
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
