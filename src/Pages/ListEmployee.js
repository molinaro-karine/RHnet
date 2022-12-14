import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";

const ListEmployee = () => {
  return (
    <div id="employee-div" className="container">
      <h1 className="employee-title title">Current Employees</h1>

      <div className="home">
        <Table />
        <Link to={"/"} className="link">
          Home
        </Link>
      </div>
    </div>
  );
};

export default ListEmployee;
