import { styled } from "styled-components";

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 274px;
  padding: 12px 20px;
  margin: 20px auto;
  border: transparent;
  border-radius: 12px;
  background-color: rgba(239, 127, 29, 0.9);

  color: rgba(237, 239, 247, 1);

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover,
  &:focus {
    background-color: rgba(227, 160, 45, 0.8);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
  }
`;
