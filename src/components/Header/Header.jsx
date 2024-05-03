import React, { useState } from "react";
import "./Header.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { HiViewList } from "react-icons/hi";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <>
      {/* <div className="logo">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="logo"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
      <Navbar /> */}
      <div className="main-header">
        <Link to="/" className="logo">
          <img
            src="/images/logo.png"
            // src="/img/vip_logo.png"
            alt=""
          />
        </Link>

        <div className="header only-desktop">
          <Link to="/" className="link">
            Home
          </Link>

          {/* <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="link">Product</Space>
            </a>
          </Dropdown> */}

          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/contact" spy={true} smooth={true} className="link">
            Contact Us
          </Link>
        </div>
        <div className="icons">
          {/* <BiSearch
            className="icon"
            onClick={() => {
              setSearch(!search);
              setLogin(false);
              setMenu(false);
            }}
          /> */}
          {/* <BsPersonFill
            className="icon"
            onClick={() => {
              setLogin(!login);
              setSearch(false);
              setMenu(false);
            }}
          /> */}
          <HiViewList
            className="icon"
            id="menu"
            onClick={() => {
              // setMenu(!menu);
              // setLogin(false);
              // setSearch(false);
            }}
          />
          <div>
            {/* {search ? (
              <form className="search-form">
                <Input
                  placeholder="Search here..."
                  bordered={false}
                  onKeyPress={(event) =>
                    event.key === "Enter" ? handleSearch() : null
                  }
                  onChange={(e) => setState({ key: e.target.value })}
                  id="chatInput"
                />
                <label form="search-box">
                  <BiSearch onClick={handleSearch} />
                </label>
              </form>
            ) : null} */}
            {login ? (
              <div className="login-form">
                <h3>login</h3>
                <Input
                  type="email"
                  placeholder="your email"
                  className="login-box"
                  onChange={(e) => {
                    // setUserDetail({ ...userDetail, email: e.target.value });
                  }}
                />
                <Input
                  type="password"
                  placeholder="your password"
                  className="login-box"
                  onChange={(e) => {
                    // setUserDetail({ ...userDetail, password: e.target.value });
                  }}
                />
                <p>only for admin</p>
                <button className="btn-unique">Login Now</button>
              </div>
            ) : null}

            {menu ? (
              <div className="header">
                <Link to="/" className="link">
                  Home
                </Link>
                {/* <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="link">Product</Space>
                  </a>
                </Dropdown> */}
                <Link to="/about" className="link">
                  About
                </Link>
                <Link to="/contact" className="link">
                  Contact Us
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
