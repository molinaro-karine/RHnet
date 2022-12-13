import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <section className=" bg-blueGray-200 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
              <div className="px-4 flex-auto"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-16">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-user-friends text-xl"></i>
            </div>
            <Logo />
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="flex-col  flex items-center ">
              <div></div>
              <div>
                <p className="text-4xl mt-2 font-bold text-gray-600 sm:text-center pb-20">
                  HRnet
                </p>

                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Create Employee
                </h1>

                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <Link
                    to="/ListEmployee"
                    className="inline-block rounded-lg bg-lime-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    View Current Employees
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1"></div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Header;
