import React from "react";
import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <div>
      <div
        className="flex items-center lg:min-w-0 lg:flex-1 mt-2 "
        aria-label="Global"
      >
        <img
          className="main-nav-logo-image w-[80px] h-[80px] 	"
          src={logo}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Logo;
