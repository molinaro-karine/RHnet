import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import React from "react";
import Home from "./Pages/Home";
import ListEmployee from "./Pages/ListEmployee";
import Error404 from "./Pages/Error404";

/**
 * The App function returns a BrowserRouter component that contains a Routes component that contains a
 * Route component for each of the three pages in the app
 * @returns The return statement is returning the JSX code.
 */
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
