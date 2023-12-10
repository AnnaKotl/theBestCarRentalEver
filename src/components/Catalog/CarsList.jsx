import React, { useState } from "react";
import { numerator } from "../../services/helper";
import CarsItem from "./CarsItem";
import Button from "../Loading/Button";
import { Container, List, NoCarsContainer, NoCars } from "./CarsList.styled";

export default function CarsList({ catalog }) {
  const count = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [allCarsLoaded, setAllCarsLoaded] = useState(false);

  const shownCars = currentPage * count;

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleLoadMore = () => {
    if (shownCars >= catalog.length) {
      setAllCarsLoaded(true);
    } else {
      loadMore();
    }
  };

  return (
    <Container>
      <List>
        {numerator(catalog, shownCars).map((car) => (
          <li key={car.id}>
            <CarsItem car={car} />
          </li>
        ))}
      </List>

      {allCarsLoaded ? null : (
        <div>
          {shownCars < catalog.length && <Button loadMore={handleLoadMore} />}
        </div>
      )}

      {catalog.length === 0 && !allCarsLoaded && (
        <NoCarsContainer>
          <NoCars>Cars not found<br/>
            Press "reset"<br />
            and try to choose <br />
            other options
          </NoCars>
        </NoCarsContainer>
      )}
    </Container>
  );
}