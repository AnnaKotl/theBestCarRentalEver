import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCars,
  selectIsLoading,
  selectFilter,
} from "../redux/slice/selectors";
import { setFilter } from "../redux/slice/slise";
import { fetchAllCars } from "../services/api";
import { filtration } from "../services/filter";

import { MainContainer } from "../styles/GlobalStyle";
import CarsList from "../components/Catalog/CarsList";
import Filter from "../components/Catalog/Filter";
import Spinner from "../components/Loading/Spinner";

export default function Catalog() {

  const dispatch = useDispatch();

  const catalog = useSelector(selectCars);

  const filter = useSelector(selectFilter);

  const isLoading = useSelector(selectIsLoading);
  
  const choisenAutos = filtration(catalog, filter);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setFilter(null));
  }, [dispatch]);

  return (
    <MainContainer>
      {isLoading ? (
        <Spinner/>
      ) : (
        <Filter cars={choisenAutos} />
      )}
      {catalog.length !== 0 && !isLoading && (
        <CarsList catalog={choisenAutos} />
      )}
    </MainContainer>
  );
}
