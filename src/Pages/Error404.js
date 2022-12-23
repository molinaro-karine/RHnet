import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-48">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="text-lime-700 font-bold text-7xl">404</div>

          <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            This page does not exist
          </div>

          <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
          <Link
            to="/"
            className="inline-block rounded-lg mt-20 bg-lime-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-lime-700 hover:bg-lime-500 hover:ring-lime-500"
          >
            &larr;return home
            <span className="text-indigo-200" aria-hidden="true"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
