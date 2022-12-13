import React from "react";
import { Link } from "react-router-dom";

const ListEmployee = () => {
  return (
    <div id="employee-div" className="container">
      <h1 className="employee-title title">Current Employees</h1>

      <div className="home">
        <Link to={"/"} className="link">
          Home
        </Link>
      </div>
    </div>
  );
};

export default ListEmployee;
