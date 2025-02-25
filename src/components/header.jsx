import React from "react";
import logo from "../assets/freeRoomsLogo.png";

const Header = () => {
  // Inline style for icons to maintain consistent look
  const iconStyle = {
    fontSize: "24px",
    cursor: "pointer",
    color: "#EF7021",
    fontVariationSettings: "'FILL' 1",
  };

  // Container style for individual icon elements
  const iconContainerStyle = {
    border: "0.5px solid #EF7021",
    padding: "5px",
    marginLeft: "5px",
    display: "flex",
    borderRadius: "4px",
  };

  // Button style for filter and sort buttons
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    border: "0.5px solid #EF7021",
    padding: "5px 25px",
    borderRadius: "5px",
  };

  return (
    <>
      <header style={styles.header}>
        {/* Left section containing the logo and title */}
        <div style={styles.left}>
          <img src={logo} alt="Freerooms Logo" style={styles.logo} />
          <span style={styles.text}>Freerooms</span>
        </div>

        {/* Right section with icons */}
        <div style={styles.right}>
          <div style={iconContainerStyle}>
            <span className="material-symbols-outlined" style={iconStyle}>search</span>
          </div>
          <div style={{ ...iconContainerStyle, backgroundColor: "#EF7021" }}>
            <span className="material-symbols-outlined" style={{ ...iconStyle, color: "white" }}>grid_view</span>
          </div>
          <div style={iconContainerStyle}>
            <span className="material-symbols-outlined" style={iconStyle}>map</span>
          </div>
          <div style={iconContainerStyle}>
            <span className="material-symbols-outlined" style={iconStyle}>dark_mode</span>
          </div>
        </div>
      </header>

      {/* Search and filter container placed below header */}
      <div style={styles.searchContainer}>
        {/* Filter button */}
        <div style={buttonStyle}>
          <span className="material-symbols-outlined" style={iconStyle}>filter_alt</span>
          <span style={styles.buttonText}>Filters</span>
        </div>

        {/* Search bar with an input field */}
        <div style={styles.searchBar}>
          <span className="material-symbols-outlined" style={styles.searchIcon}>search</span>
          <input type="text" placeholder="Search for a building..." style={styles.searchInput} />
        </div>

        {/* Filter and Sort button */}
        <div style={buttonStyle}>
          <span className="material-symbols-outlined" style={iconStyle}>filter_list</span>
          <span style={styles.buttonText}>Sort</span>
        </div>
      </div>
    </>
  );
};

const styles = {
  header: {
    position: "fixed", // Keeps the header at the top of the screen
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between", // Space between logo and icons
    padding: "10px 20px",
    borderBottom: "0.5px solid #ccc",
    zIndex: 1000, // Keeps it on top of other elements
    boxSizing: "border-box",
    backgroundColor: "white", // Prevents grid from overlaying
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "40px",
    marginRight: "10px",
  },
  text: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#EF7021",
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    position: "fixed",
    top: "60px",  // Push it below the header
    left: 0,
    width: "100%",
    zIndex: 999,
    boxSizing: "border-box",
    backgroundColor: "white",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    width: "50%",
    marginLeft: "20px",
    marginRight: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px 8px",
  },
  searchInput: {
    width: "100%",
    border: "none", // Remove default input border
    outline: "none",
  },
  searchIcon: {
    color: "grey",
    cursor: "pointer",
  },
  buttonText: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#EF7021",
    marginLeft: "10px",
  },
};

export default Header;
