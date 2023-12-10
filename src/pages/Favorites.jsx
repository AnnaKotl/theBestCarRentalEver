import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Catalog/Filter";
import CarsItem from "../components/Catalog/CarsItem";
import { selectFavorites, selectFilter } from "../redux/slice/selectors";
import { setFilter } from "../redux/slice/slise";
import { filtration } from "../services/filter";
import { MainContainer } from "../styles/GlobalStyle";
import { ButtonLink, NoCarsContainer, NoCars, Section } from "../components/Favorites/Favorites.styled";

export default function Favorites() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const favorites = useSelector(selectFavorites);
  const choisen = filtration(favorites, filter);

  useEffect(() => {
    dispatch(setFilter(null));
  }, [dispatch]);

  return (
    <MainContainer>
      <Section>
      {favorites.length > 0 && (
        <Filter cars={choisen} />
      )}

      {choisen.length > 0 ? (
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            columnGap: "29px",
            rowGap: "50px",
          }}
        >
          {choisen.map((car) => (
            <li key={car.id}>
              <CarsItem car={car} />
            </li>
          ))}
        </ul>
      ) : (
        <NoCarsContainer>
          <NoCars>No selected cars found</NoCars>
            <NoCars>Please select a car from the catalog:</NoCars>
          <ButtonLink to="/catalog">Catalog</ButtonLink>
        </NoCarsContainer>
      )}

      {choisen.length === 0 && favorites.length > 0 && (
        <div>
          <b>Cars Not Found</b>
        </div>
        )}
        </Section>
    </MainContainer>
  );
}
