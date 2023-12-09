import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1264px;
  padding: 0 120px;
  margin: 0 auto;
`;

export const Header = styled.header`
  background-color: #0d1757;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  color: #edeff7;
`;

export const StyledNavLink = styled(NavLink)`
color: #edeff7
  position: relative;
  padding: 10px;
  font-weight: 600;
  font-size: 24px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #e3a02d;
    transform: scale(1.05);
  }

  &.active {
    color: #9fa9d4;
    transform: scale(1.05);
  }
`;

export const Logo = styled.img`
  padding: 10px;
`;

/* Accent color #0d1757
    BGC #edeff7
    text-color #01020a
*/