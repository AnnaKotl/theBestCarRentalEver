import React from "react";
import NavLinks from "./NavLinks";

import NavLogo from "./NavLogo";
import { NavContainer } from "./NavHeader.styled";

export default function NavHeader() {
  return (
    <header>
      <NavContainer>
        <NavLinks />
        <NavLogo />
      </NavContainer>
    </header>
  );
}