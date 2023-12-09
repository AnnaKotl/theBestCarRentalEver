import React from "react";
import NavLinks from "./NavLinks";

import NavLogo from "./NavLogo";
import { Header, NavContainer } from "./NavHeader.styled";

export default function NavHeader() {
  return (
    <Header>
      <NavContainer>
        <NavLinks />
        <NavLogo />
      </NavContainer>
      {/* <hr /> */}
    </Header>
  );
}