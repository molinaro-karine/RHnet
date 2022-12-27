import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import TableEmployee from "../components/TableEmployee";
//import TableTest from "../components/TableTest";

const ListEmployee = () => {
  return (
    <>
      <div className="fond bg-zinc-50">
        <Header />
        <h1 className="text-4xl font-bold tracking-tight items-center justify-center py-5 text-center">
          Current Employees
        </h1>
        <div className="max-w-2xl mx-auto bg-gray-50 p-5">
          <div className="mt-8 flex gap-x-4 items-center justify-center py-5 text-center">
            <Link
              to="/"
              className="inline-block rounded-lg bg-lime-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-lime-700 hover:bg-lime-500 hover:ring-lime-500"
            >
              &larr;return home
              <span className="text-indigo-200" aria-hidden="true"></span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <TableEmployee />
        </div>
      </div>
    </>
  );
};

export default ListEmployee;
