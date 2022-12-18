import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import React from "react";
import Home from "./Pages/Home";
import ListEmployee from "./Pages/ListEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ListEmployee" element={<ListEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
