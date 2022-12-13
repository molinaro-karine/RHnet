import React, { memo } from "react";
import logo from "../assets/logo.svg";

const Logo = memo(() => {
  return (
    <div>
      <div className="flex lg:min-w-0 lg:flex-1 mt-12" aria-label="Global">
        <img className="main-nav-logo-image" src={logo} alt="logo" />
      </div>
    </div>
  );
});

export default Logo;
