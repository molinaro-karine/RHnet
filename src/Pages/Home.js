import React from "react";
import { Link } from "react-router-dom";
import AddForm from "../components/AddForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className="fond bg-zinc-50">
        <Header />
        <h1 className="text-4xl font-bold tracking-tight items-center justify-center  text-center">
          Create Employee
        </h1>
        <div className="max-w-2xl mx-auto bg-gray-50 ">
          <div className="mt-2 flex gap-x-4 items-center justify-center py-5 text-center">
            <Link
              to="/ListEmployee"
              className="inline-block rounded-lg bg-lime-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-lime-700 hover:bg-lime-500 hover:ring-lime-500"
            >
              View Current Employees
              <span className="text-indigo-200" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
        <div className="drop-shadow max-w-2xl mx-auto rounded-md border border-transparent bg-white	mt-2 p-16 ">
          <AddForm />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
