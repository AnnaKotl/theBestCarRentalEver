import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
  align-items: center;
  text-align: center;
  justify-content: center;
  font-weight: 500;
  font-size: 24px;
  color: rgba(237, 239, 247, 0.9);
  background-color: rgba(13, 23, 87, 0.5);

  padding: 14px 30px;
  border: 1px solid #0d1757;
  border-radius: 18px;
  min-width: 220px;
  margin: 30px auto 0;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus {
    color: rgba(227, 160, 45, 0.9);
    background-color: rgba(13, 23, 87, 0.8);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

export const NoCarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
`;

export const NoCars = styled.b`
  font-size: 32px;
  font-weight: 500;
`;

export const Section = styled.div`
  padding-bottom: 20px;
`;