import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-5 text-center">
        <Logo />

        <h1 className="text-4xl mt-2 font-bold text-gray-600 sm:text-center pb-1">
          HRnet
        </h1>
      </div>
    </>
  );
};

export default Header;
