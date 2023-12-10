import "modern-normalize";
import { createGlobalStyle, styled } from "styled-components";

/* Accent color - rgba(227, 160, 45, 0.9)

    prime + color #0d1757 
    rgba(13, 23, 87, 0.8)

    BGC or NavLink #edeff7 
    rgba(237, 239, 247, 0.7)

    text-color #01020a

    hover - box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
*/

export const MainContainer = styled.div`
  max-width: 1440px;
  padding: 0 120px;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

html::-webkit-scrollbar {
  display: none;
}

html {
  scrollbar-width: none;
}

body {
  margin: 0;
  background-color: #edeff7;
  color: #01020a;
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::-webkit-scrollbar {
    appearance: none;
    background: transparent;
    width: 0;
  }

}

img{
    display: block;
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
