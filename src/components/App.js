import React from "react";
import Floor from "./Floor/Floor";
import { Provider as FloorProvider } from "../context/floorContext";
import "../assets/css/App.css";

const App = () => {
  return (
    <div className="App">
      <FloorProvider>
        <Floor />
      </FloorProvider>
    </div>
  );
};

export default App;
