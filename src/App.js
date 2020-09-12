import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import NavBar from "./Componnts/NavBar";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
