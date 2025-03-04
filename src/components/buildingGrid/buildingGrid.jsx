// BuildingGrid.js
import React, { useEffect, useState } from "react";
import "./BuildingGrid.css";

const BuildingGrid = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    fetch("src/data.json")
      .then((res) => res.json())
      .then(setBuildings)
      .catch((err) => console.error("Error fetching buildings:", err));
  }, []);

  return (
    <div className="grid-container">
      {buildings.map((building, index) => (
        <BuildingCard key={index} building={building} />
      ))}
    </div>
  );
};

const BuildingCard = ({ building }) => {
  const imagePath = `src/assets/${building.building_picture || building.building_file}`;

  return (
    <div className="grid-item">
      <img src={imagePath} alt={building.name} className="building-image" />
      <div className="rooms-available">
        <span className="green-dot"></span>
        <span class="room-count">{building.rooms_available}</span>
        <span class="room-text">rooms available</span>
      </div>
      <div className="building-name">{building.name}</div>
    </div>
  );
};

export default BuildingGrid;