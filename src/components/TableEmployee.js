//libraries
import React, { useState } from "react";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";
import {
  useSort,
  HeaderCellSort,
} from "@table-library/react-table-library/sort";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import { useSelector } from "react-redux";

//components
import SelectForm from "./SelectForm";
//styles
import "./tableEmployee.css";
const TableComponent = () => {
  const employeeList = useSelector((state) => state.employee.list);

  let data = { nodes: employeeList };

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const paginationSizeOptions = [
    {
      value: 10,
      label: 10,
    },
    {
      value: 25,
      label: 25,
    },
    {
      value: 50,
      label: 50,
    },
  ];
  // pagination nb de pages + state changement de page
  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: paginationSizeOptions[0].value,
    },
  });

  //const theme = useTheme(getTheme());
  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `background-color: #eaf5fd;`,
      Row: `text-align: left;`,
      HeaderCell: `
            text-align: left;
            background-color:#EEF2DF;
        `,
      Cell: `
            & div {
                white-space: normal;
            }
        `,
      Table: `
            --data-table-library_grid-template-columns: repeat(9, minmax(140px, 1fr));
        `,
    },
  ]);

  // filter data by search value
  data = {
    nodes: data.nodes.filter((row) => {
      // combine all values from row into 1 string
      const combinedRowValues = Object.values(row).join(",").toLowerCase();
      // check if the row values matches search text
      const isSearchTextInRow = combinedRowValues.includes(
        search.toLocaleLowerCase()
      );
      return isSearchTextInRow;
    }),
  };

  const showingFrom =
    data.nodes.length > 0
      ? pagination.state.page * pagination.state.size + 1
      : 0;
  const showingTo =
    (pagination.state.page + 1) * pagination.state.size < data.nodes.length
      ? (pagination.state.page + 1) * pagination.state.size
      : data.nodes.length;

  // sort
  const sort = useSort(data, null, {
    sortFns: {
      firstName: (array) =>
        array.sort((a, b) => a.firstName.localeCompare(b.firstName)),
      lastName: (array) =>
        array.sort((a, b) => a.lastName.localeCompare(b.lastName)),
      startDate: (array) =>
        array.sort((a, b) => new Date(a.startDate) - new Date(b.startDate)),
      department: (array) =>
        array.sort((a, b) => a.department.localeCompare(b.department)),
      dateOfBirth: (array) =>
        array.sort((a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth)),
      street: (array) => array.sort((a, b) => a.street.localeCompare(b.street)),
      city: (array) => array.sort((a, b) => a.city.localeCompare(b.city)),
      state: (array) => array.sort((a, b) => a.state.localeCompare(b.state)),
      zipCode: (array) => array.sort((a, b) => a.zipCode - b.zipCode),
    },
  });

  return (
    <div>
      <div className="mb-10">
        <div className="pagination-select mb-20">
          <SelectForm
            options={paginationSizeOptions}
            onChange={pagination.fns.onSetSize}
          />
        </div>
        <label className="sr-only" htmlFor="search">
          Search:
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            id="search"
            type="text"
            onChange={handleSearch}
          />
        </div>
      </div>

      <Table
        className="min-w-full"
        data={data}
        sort={sort}
        theme={theme}
        layout={{ custom: true, horizontalScroll: true }}
        pagination={pagination}
      >
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSort sortKey="firstName">First Name</HeaderCellSort>
                <HeaderCellSort sortKey="lastName">Last Name</HeaderCellSort>
                <HeaderCellSort sortKey="startDate">Start Date</HeaderCellSort>
                <HeaderCellSort sortKey="department">Department</HeaderCellSort>
                <HeaderCellSort sortKey="dateOfBirth">
                  Date of Birth
                </HeaderCellSort>
                <HeaderCellSort sortKey="street">Street</HeaderCellSort>
                <HeaderCellSort sortKey="city">City</HeaderCellSort>
                <HeaderCellSort sortKey="state">State</HeaderCellSort>
                <HeaderCellSort sortKey="zipCode">Zip Code</HeaderCellSort>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                  <Cell>{item.firstName}</Cell>
                  <Cell>{item.lastName}</Cell>
                  <Cell>
                    {new Date(item.startDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </Cell>
                  <Cell>{item.department}</Cell>
                  <Cell>
                    {new Date(item.dateOfBirth).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </Cell>
                  <Cell>{item.street}</Cell>
                  <Cell>{item.city}</Cell>
                  <Cell>{item.state}</Cell>
                  <Cell>{item.zipCode}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
      <div
        className="pagination-bar relative"
        /* A style object. */
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span className="mt-10 mb-10 px-3 py-2 ml-0 leading-tight text-white-500  border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Showing {showingFrom} to {showingTo} entries:{data.nodes.length}
        </span>
        <span className="next-and-previous mr-5">
          <button
            type="button"
            className="mt-10 mb-10 px-3 py-2 ml-0 leading-tight text-white-500  border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white w-32"
            disabled={data.nodes.length === 0 || pagination.state.page === 0}
            onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}
          >
            {"Previous"}
          </button>
          <span className="grid px-4">{` ${pagination.state.page + 1} `}</span>
          <button
            type="button"
            className="button button-pagination px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white w-32"
            disabled={
              data.nodes.length === 0 ||
              pagination.state.page + 1 ===
                pagination.state.getTotalPages(data.nodes)
            }
            onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}
          >
            {"Next"}
          </button>
        </span>
      </div>
    </div>
  );
};

export default TableComponent;
