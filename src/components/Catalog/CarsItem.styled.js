import { styled } from "styled-components";

export const AutoEl = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 274px;
  max-height: 426px;
  height: 100%;
`;

export const ImageEl = styled.div`
  position: relative;
  background-color: rgba(237, 239, 247, 0.7);
  width: 274px;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;

  transition: box-shadow 0.3s;

  &:hover,
  &:focus {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
  }

  img {
    border-radius: 14px;
    object-fit: cover;
  }
`;

export const IconHeart = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const ButtonLearn = styled.button`
  width: 100%;
  padding: 12px 0;
  margin-top: 6px;
  border: transparent;
  border-radius: 12px;
  background-color: rgba(13, 23, 87, 0.8);

  color: rgba(237, 239, 247, 1);

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(13, 23, 87, 0.9);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const TitleEl = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  color: #01020a;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;

  span {
    color: rgba(239, 127, 29, 1);
  }
`;

export const InfoEl = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: auto;

  p {
    color: rgba(1, 2, 10, 0.8);

    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
`;
