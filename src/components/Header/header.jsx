// Header.js
import React from "react";
import logo from "/src/assets/freeRoomsLogo.png";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Freerooms Logo" className="header-logo" />
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