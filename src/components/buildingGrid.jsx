import React, { useEffect, useState } from "react";

const BuildingGrid = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    fetch("src/data.json")
      .then((response) => response.json())
      .then((data) => setBuildings(data));
  }, []);

  return (
    <div style={styles.gridContainer}>
      {buildings.map((building, index) => (
        <div key={index} style={styles.gridItem}>
          <img
            src={`src/assets/${building.building_picture || building.building_file}`}
            alt={building.name}
            style={styles.buildingImage}
          />
          <div style={styles.roomsAvailable}>{building.rooms_available}</div>
          <div style={styles.buildingName}>{building.name}</div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
    marginTop: "100px",
  },
  gridItem: {
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    textAlign: "center",
  },
  buildingImage: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  roomsAvailable: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "white",
    padding: "5px 10px",
    borderRadius: "8px",
    fontWeight: "bold",
  },
  buildingName: {
    background: "#EF7021",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};

export default BuildingGrid;
