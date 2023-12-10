import { styled } from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 541px;
  height: 780px;
  padding: 40px;
  border-radius: 24px;
  background-color: white;
  margin: 10px 0;

  h3 {
    color: #121417;

    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 8px;

    span {
      color: rgba(239, 127, 29, 1);
    }
  }

  > p {
    color: #121417;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 24px;
  }

  h4 {
    color: #121417;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 8px;
  }
`;

export const ImageContainer = styled.div`
  background-color: #f3f3f2;
  border-radius: 14px;
  margin-bottom: 14px;

  img {
    object-fit: cover;
    border-radius: 14px;
    width: 100%;
    height: 248px;
  }
`;

export const ShortInfoContainer = styled.div`
  margin-bottom: 14px;

  p {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;

  svg {
    width: 24px;
    height: 24px;
    scale: 1;
    fill: rgba(18, 20, 23, 1);
    transition: scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke 200ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      fill: rgba(239, 127, 29, 1);
      scale: 1.2;
    }
  }
`;

export const FunctionsContainer = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 24px;
`;

export const RentContainer = styled.div`
  display: flex;
  margin-top: auto;
`;

export const ButtonRental = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
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

export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    border-radius: 35px;
    background: #f9f9f9;
    padding: 7px 14px;
    color: #363535;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.24px;

    span {
      color: rgba(239, 127, 29, 1);
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: -0.24px;
    }
  }
`;
