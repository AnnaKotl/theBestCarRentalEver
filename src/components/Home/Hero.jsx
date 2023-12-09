import React from "react";
import { FaGithub } from "react-icons/fa";
import { ButtonLink, Container, Title, Autor } from "./Hero.styled";
import { Link } from "react-router-dom"; // Додано імпорт Link

export default function Hero() {
  return (
    <Container>
      <Title>Search. Compare. Rent.</Title>
      <ButtonLink to="/catalog">Catalog</ButtonLink>
      <Autor href="https://github.com/AnnaKotl">
        <FaGithub />
      </Autor>
    </Container>
  );
}

