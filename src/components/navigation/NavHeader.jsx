import React from "react";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import { Header, Line, NavContainer } from "./NavHeader.styled";

export default function NavHeader() {
  return (
    <Header>
      <NavContainer>
        <NavLinks />
        <NavLogo />
      </NavContainer>
      <Line />
    </Header>
  );
}