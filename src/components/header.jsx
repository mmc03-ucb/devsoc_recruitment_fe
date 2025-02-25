import React from "react";
import logo from "../assets/freeRoomsLogo.png";

const Header = () => {
  const iconStyle = {
    fontSize: "24px",
    cursor: "pointer",
    color: "#EF7021",
    fontVariationSettings: "'FILL' 1",
  };

  const iconContainerStyle = {
    border: "0.5px solid #EF7021",
    padding: "5px",
    marginLeft: "5px",
    display: "flex",
    borderRadius: "4px",
  };

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
        <div style={styles.left}>
          <img src={logo} alt="Freerooms Logo" style={styles.logo} />
          <span style={styles.text}>Freerooms</span>
        </div>
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
      <div style={styles.searchContainer}>
        <div style={buttonStyle}>
          <span className="material-symbols-outlined" style={iconStyle}>filter_alt</span>
          <span style={styles.buttonText}>Filters</span>
        </div>
        <div style={styles.searchBar}>
          <span className="material-symbols-outlined" style={styles.searchIcon}>search</span>
          <input type="text" placeholder="Search for a building..." style={styles.searchInput} />
        </div>
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
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    borderBottom: "0.5px solid #ccc",
    zIndex: 1000,
    boxSizing: "border-box",
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
    top: "60px",
    left: 0,
    width: "100%",
    zIndex: 999,
    boxSizing: "border-box",
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
    boxSizing: "border-box",
    border: "none",
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