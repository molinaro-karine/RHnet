import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "First Name",
    selector: (row) => row.prenom,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.nom,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => row.debut,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row) => row.service,
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.naissance,
    sortable: true,
  },
  {
    name: "Street",
    selector: (row) => row.rue,
    sortable: true,
  },
  {
    name: "City",
    selector: (row) => row.ville,
    sortable: true,
  },
  {
    name: "State",
    selector: (row) => row.etat,
    sortable: true,
  },
  {
    name: "Zip Code",
    selector: (row) => row.codePostal,
    sortable: true,
  },
];

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
