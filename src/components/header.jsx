import React from "react";
import logo from "../assets/freeRoomsLogo.png";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.left}> {/* Left side of header (logo and text) */}
        <img src={logo} alt="Freerooms Logo" style={styles.logo} />
        <span style={styles.text}>Freerooms</span>
      </div>
      <div style={styles.right}> {/* Right side of header (icons) */}
        <div style={styles.iconContainer}> {/* Search icon container */}
          <span className="material-symbols-outlined" style={styles.icon}>search</span>
        </div>
        <div style={{ // Grid icon container with inline styles for fill
          ...styles.iconContainer,
          backgroundColor: "#EF7021", // Tangerine background
        }}>
          <span className="material-symbols-outlined" style={{ ...styles.icon, color: "white" }}>grid_view</span>
        </div>
        <div style={styles.iconContainer}> {/* Map icon container */}
          <span className="material-symbols-outlined" style={styles.icon}>map</span>
        </div>
        <div style={styles.iconContainer}> {/* Dark mode icon container */}
          <span className="material-symbols-outlined" style={styles.icon}>dark_mode</span>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between", // Distribute space between left and right
    padding: "10px 20px",
    borderBottom: "0.5px solid #ccc", // Light gray border at the bottom
    zIndex: 1000, // Ensure header is on top
    boxSizing: "border-box", // Include padding and border in element's total width and height so nothing goes off window
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
  iconContainer: {
    border: "0.5px solid #EF7021",
    padding: "5px",
    marginLeft: "5px",
    display: "flex",
    borderRadius: "4px", // Rounded corners
  },
  icon: {
    fontSize: "24px",
    cursor: "pointer",
    color: "#EF7021",
    fontVariationSettings: "'FILL' 1", // Fill the icon
  },
};

export default Header;