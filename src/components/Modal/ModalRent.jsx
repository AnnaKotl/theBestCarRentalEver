import {
  parseFormattedMileage,
  parseFormattedPrice,
  parseRentalConditions,
} from "../../services/helper";

import { RentalList } from "./Modal.styled";
import ModalRentItem from "./ModalRentItem";

export default function ModalRent({ conditions, price, mileage }) {
  const text = parseRentalConditions(conditions);

  const money = parseFormattedPrice(price);

  const race = parseFormattedMileage(mileage);

  return (
    <RentalList>
      <ModalRentItem title={text[0]} value={text[1]} />
      <ModalRentItem title={text[2]} />
      <ModalRentItem title={text[3]} />
      <ModalRentItem title={"Mileage: "} value={race} />
      <ModalRentItem title={"Price: "} value={`${money}$`} />
    </RentalList>
  );
}