import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import React from "react";
import Home from "./Pages/Home";
import ListEmployee from "./Pages/ListEmployee";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ListEmployee" element={<ListEmployee />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
