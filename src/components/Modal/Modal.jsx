import React, { useEffect } from "react";
import CustomModal from "react-modal";
import { MdOutlineClose } from "react-icons/md";

import defaultcar from "/images/defaultcar.jpg";
import ModalList from "./ModalList";
import ModalRent from "./ModalRent";

import {
  ButtonClose,
  ButtonRental,
  FunctionsContainer,
  ImageContainer,
  ModalContainer,
  RentContainer,
  ShortInfoContainer,
} from "./Modal.styled";

CustomModal.setAppElement("#root");

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 3,
    overflow: "auto",
  },
  content: {
    maxWidth: "fit-content",
    maxHeight: "fit-content",
    margin: "auto",
    overflow: "auto",
    inset: 0,
    border: "none",
    background: "none",
    padding: 0,
  },
};

export default function MyModal({ state, forClose, data, city, country }) {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    photoLink,
    accessories,
    functionalities,
    rentalPrice,
    rentalConditions,
    mileage,
  } = data;

  const handleModalState = (isOpen) => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    handleModalState(state);
  }, [state]);

  return (
    <CustomModal isOpen={state} onRequestClose={forClose} style={customStyles}>
      <ModalContainer>
        <ButtonClose type="button" onClick={forClose}>
          <MdOutlineClose />
        </ButtonClose>
        <ImageContainer>
          <img
            src={img || photoLink || defaultcar}
            alt={`${make} ${model}`}
            loading="lazy"
          />
        </ImageContainer>
        <h3>
          {make} <span>{model}</span>, {year}
        </h3>
        <ShortInfoContainer>
          <p>
            {city} | {country} | Id: {id} | Year: {year} | Type: {type}
          </p>
          <p>
            Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </p>
        </ShortInfoContainer>
        <p>{description}</p>
        <h4>Accessories and functionalities:</h4>
        <FunctionsContainer>
          <ModalList set={accessories} />
          <ModalList set={functionalities} />
        </FunctionsContainer>
        <h4>Rental Conditions:</h4>
        <ModalRent
          conditions={rentalConditions}
          price={rentalPrice}
          mileage={mileage}
        />
        <RentContainer>
          <ButtonRental href="tel:+380730000000">Rental car</ButtonRental>
        </RentContainer>
      </ModalContainer>
    </CustomModal>
  );
}
