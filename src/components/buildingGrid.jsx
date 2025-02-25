import React, { useEffect, useState } from "react";

const BuildingGrid = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    // Fetch building data from the JSON file when the component mounts
    fetch("src/data.json")
      .then((res) => res.json())
      .then(setBuildings)
      .catch((err) => console.error("Error fetching buildings:", err));
  }, []);

  return (
    <div style={styles.gridContainer}>
      {/* Map through the buildings array and render a BuildingCard for each */}
      {buildings.map((building, index) => (
        <BuildingCard key={index} building={building} />
      ))}
    </div>
  );
};

const BuildingCard = ({ building }) => {
  // Determine the correct image path based on available properties
  const imagePath = `src/assets/${building.building_picture || building.building_file}`;

  return (
    <div style={styles.gridItem}>
      <img src={imagePath} alt={building.name} style={styles.buildingImage} />
      <div style={styles.roomsAvailable}>
        <span style={styles.greenDot}></span>
        {building.rooms_available} rooms available
      </div>
      <div style={styles.buildingName}>{building.name}</div>
    </div>
  );
};

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Responsive grid layout
    gap: 20,
    padding: 20,
    marginTop: 80,
  },
  gridItem: {
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
    textAlign: "center",
    height: 350,
    display: "flex",
    flexDirection: "column",
  },
  buildingImage: {
    width: "100%",
    flexGrow: 1, // Ensures the image expands within the container
    objectFit: "cover", // Maintains aspect ratio while covering the space
  },
  roomsAvailable: {
    position: "absolute",
    top: 10,
    right: 10,
    background: "white",
    padding: "5px 10px",
    borderRadius: 8,
    fontWeight: "bold",
    fontSize: 10,
  },
  greenDot: {
    width: 7,
    height: 7,
    backgroundColor: "green",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: 5,
  },
  buildingName: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: "translateX(-50%)", // Centers the text horizontally
    width: "80%",
    background: "#EF7021",
    color: "white",
    padding: 10,
    fontWeight: "bold",
    textAlign: "left",
    borderRadius: 8,
    fontSize: 12,
  },
};

export default BuildingGrid;
