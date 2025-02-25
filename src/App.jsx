import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import BuildingGrid from "./components/buildingGrid";

function App() {
  return (
    <>
      <Header />
      <BuildingGrid />
    </>
  );
}

export default App;
