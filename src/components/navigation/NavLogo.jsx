import React from "react";
import carLogo from "/images/nav-logo.png";
import { Logo } from "./NavHeader.styled";

const NavLogo = () => {
  return (
    <>
      <a href="/">
        <Logo src={carLogo} alt="car-logo" height="80px" />
      </a>
    </>
  );
};

export default NavLogo;
