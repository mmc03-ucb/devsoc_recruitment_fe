import { useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import BuildingGrid from "./components/buildingGrid/buildingGrid";

function App() {
  return (
    <>
      <Header />
      <BuildingGrid />
    </>
  );
}

export default App;
