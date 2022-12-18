import React from "react";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <div>
      <nav>
        <div>
          <h1>
            <Link
              to="/"
              className=""
            ></Link>
          </h1>
        </div>
        <span className="logo"></span>
        <h1 className="title"> HRnet</h1>
        <h2> Create Employee</h2>
      </nav>

    </div>
  );
};

export default Table;
