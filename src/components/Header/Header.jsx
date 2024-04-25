import React from "react";
import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="main-nav">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
