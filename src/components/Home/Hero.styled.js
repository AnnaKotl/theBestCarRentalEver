import { styled } from "styled-components";
import { Link } from "react-router-dom";
import hero from "/images/hero.jpg";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;

  background-image: linear-gradient(
      rgba(46, 47, 66, 0.3),
      rgba(46, 47, 66, 0.3)
    ),
    url(${hero});
  background-color: #edeff7;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 64px;
  color: #edeff7;
`;

export const ButtonLink = styled(Link)`
  align-items: center;
  text-align: center;
  justify-content: center;
  font-weight: 500;
  font-size: 24px;
  color: #edeff7;
  background-color: transparent;

  padding: 14px 30px;
  border: 1px solid #0d1757;
  border-radius: 8px;
  min-width: 220px;
  margin: 10px auto 0;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus {
    color: #e3a02d;
    background-color: #0d1757;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;

export const Autor = styled.a`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;
  right: 50%;
  transform: translateX(50%);
  font-size: 36px;
  color: #edeff7;

  padding: 10px;
  margin: 0 auto;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: #e3a02d;
  }
`;

