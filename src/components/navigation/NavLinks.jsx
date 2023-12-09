import { LinkContainer, StyledNavLink } from "./NavHeader.styled";

export default function MyNavLinks() {
  return (
    <nav>
      <LinkContainer>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </LinkContainer>
    </nav>
  );
}
