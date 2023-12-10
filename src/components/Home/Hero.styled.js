import { styled } from "styled-components";
import { Link } from "react-router-dom";
import hero from '/images/hero.jpg';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  padding-top: 100px;
  width: 100%;
  height: 100vh;

  background-image: linear-gradient(
      rgba(46, 47, 66, 0.3),
      rgba(46, 47, 66, 0.3)
    ),
    url(${hero});

  background-color: rgba(237, 239, 247, 0.7);
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
  font-size: 68px;
  color: rgba(237, 239, 247, 0.8);
`;

export const SubTitle = styled.p`
margin-top: 20px;
font-weight: 500;
  font-size: 24px;
  color: rgba(237, 239, 247, 1);
`;

export const ButtonLink = styled(Link)`
  align-items: center;
  text-align: center;
  justify-content: center;
  font-weight: 500;
  font-size: 24px;
  color: rgba(237, 239, 247, 0.8);
  background-color: rgba(13, 23, 87, 0.1);

  padding: 14px 30px;
  border: 1px solid #0d1757;
  border-radius: 18px;
  min-width: 220px;
  margin: 60px auto 0;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus {
    color: rgba(227, 160, 45, 0.9);
    background-color: rgba(13, 23, 87, 0.8);
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
  color: rgba(237, 239, 247, 0.7);

  padding: 10px;
  margin: 0 auto;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: rgba(227, 160, 45, 0.9);
  }
`;

