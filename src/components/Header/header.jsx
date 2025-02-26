// Header.js
import React, { useState } from "react";
import openDoorLogo from "/src/assets/freeRoomsLogo.png";
import closedDoorLogo from "/src/assets/freeroomsDoorClosed.png";
import "./Header.css";

const Header = () => {
  const [logoSrc, setLogoSrc] = useState(openDoorLogo);

  const toggleLogo = () => {
    setLogoSrc((prevSrc) =>
      prevSrc === openDoorLogo ? closedDoorLogo : openDoorLogo
    );
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img
            src={logoSrc}
            alt="Freerooms Logo"
            className="header-logo"
            onClick={toggleLogo}
            style={{ cursor: "pointer" }}
          />
          <span className="header-text">Freerooms</span>
        </div>
        <div className="header-right">
          <div className="icon-container">
            <span className="material-symbols-outlined icon">search</span>
          </div>
          <div className="icon-container icon-container-active">
            <span className="material-symbols-outlined icon icon-active">
              grid_view
            </span>
          </div>
          <div className="icon-container">
            <span className="material-symbols-outlined icon">map</span>
          </div>
          <div className="icon-container">
            <span className="material-symbols-outlined icon">dark_mode</span>
          </div>
        </div>
      </header>
      <div className="search-container">
        <div className="button">
          <span className="material-symbols-outlined icon">filter_alt</span>
          <span className="button-text">Filters</span>
        </div>
        <div className="search-bar">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            type="text"
            placeholder="Search for a building..."
            className="search-input"
          />
        </div>
        <div className="button">
          <span className="material-symbols-outlined icon">filter_list</span>
          <span className="button-text">Sort</span>
        </div>
      </div>
    </>
  );
};

export default Header;