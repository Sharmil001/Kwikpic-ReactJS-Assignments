import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { menuData } from "../../mockup-data/data";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-container">
            <img className="logo-img" alt="logo" src={logo} />
          </span>
        </div>

        {/* menuData */}
        {menuData.map((ele, index) => (
          <NavLink key={index} className="nav-link" to={ele.routerLink}>
            {ele.name}
          </NavLink>
        ))}
      </div>
      <div className="download-container">
        <p className="download-text">Download Now</p>
        <div className="download-btn">
          <span className="download-btn-img">
            <img
              className="download-btn-icon"
              alt="flint logo"
              src={
                "https://www.flint.money/_next/image?url=%2FDownArrowBlack.png&w=64&q=75"
              }
            />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
