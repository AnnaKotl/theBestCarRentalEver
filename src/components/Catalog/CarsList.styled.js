import { styled } from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  align-items: stretch;
`;

export const Container = styled.div`
  padding-bottom: 20px;
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