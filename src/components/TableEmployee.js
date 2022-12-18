import React from "react";
import DataTable from "react-data-table-component";

const TableEmployee = () => {
  return (
    <div>
      <DataTable
        subHeader
        subHeaderComponent={
          <input
            type="text"
            name="recherche"
            className="maRecherche"
            placeholder="Search..."
          ></input>
        }
        pagination
        responsive
        subHeaderAlign="right"
        highlightOnHover
        striped
        direction="auto"
        fixedHeaderScrollHeight="300px"
        persistTableHead
      />
    </div>
  );
};
export default TableEmployee;
