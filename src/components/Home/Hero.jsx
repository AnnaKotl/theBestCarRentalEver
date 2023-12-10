import React from "react";
import { FaGithub } from "react-icons/fa";
import { ButtonLink, Container, Title, Autor, SubTitle } from "./Hero.styled";

export default function Hero() {
  return (
    <Container>
      <Title>Search. Compare. Rent.</Title>
      <SubTitle>Car rental at the best prices</SubTitle>
      <ButtonLink to="/catalog">Catalog</ButtonLink>
      <Autor href="https://github.com/AnnaKotl">
        <FaGithub />
      </Autor>
    </Container>
  );
}

