import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiHeart } from "react-icons/fi";

import { format, stringShorts } from "../../services/format";
import { delFromFavorites, addToFavorites } from "../../redux/slice/slise";
import { selectFavorites } from "../../redux/slice/selectors";
import MyModal from "../Modal/Modal";
import defaultcar from "/images/defaultcar.jpg";

import {
  AutoEl,
  ButtonLearn,
  IconHeart,
  ImageEl,
  InfoEl,
  TitleEl,
} from "./CarsItem.styled";

export default function CarsItem({ car }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const choisen = useSelector(selectFavorites);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    photoLink,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = car;

  const { city, country } = format(address);

  const short = stringShorts(functionalities);

  const isChoisen = choisen?.some((i) => i.id === id);

  const handleHeartClick = () => {
    return isChoisen
      ? dispatch(delFromFavorites(car))
      : dispatch(addToFavorites(car));
  };

  return (
    <>
      <AutoEl>
        <ImageEl>
          <IconHeart onClick={handleHeartClick}>
            <FiHeart
              style={{
                width: "30px",
                height: "30px",
                fill: isChoisen ? "rgba(227, 160, 45, 0.8)" : "transparent",
                stroke: isChoisen ? "transparent" : "rgba(239, 127, 29, 0.9)",
                cursor: "pointer",
                transition: "fill 0.3s ease, stroke 0.3s ease",
              }}
            />
          </IconHeart>

          <img
            src={img || photoLink || defaultcar}
            alt={`${make} ${model}`}
            width="100%"
            height="100%"
            loading="l
            azy"
          />
        </ImageEl>

        <TitleEl>
          <p>
            {make} <span>{model}</span>, {year}
          </p>
          <p>{rentalPrice}</p>
        </TitleEl>

        <InfoEl>
          <div>
            <p>
              {city} | {country} | {rentalCompany}
            </p>
            <p>
              {type} | {model} | {id} | {short}
            </p>
          </div>
        </InfoEl>

        <ButtonLearn type="button" onClick={openModal}>
          Learn more
        </ButtonLearn>
      </AutoEl>

      <MyModal
        state={isModalOpen}
        forClose={closeModal}
        data={car}
        city={city}
        country={country}
      />
    </>
  );
}
