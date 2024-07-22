import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Units from "./pages/Units";
import UnitDetailPage from "./pages/UnitDetailPage";
import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/units" element={<Units />} />
        <Route path="/units/:unitId" element={<UnitDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
