import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import toast from "react-hot-toast";

import {
  Button,
  ButtonDiv,
  FilterContainer,
  InputMax,
  InputMin,
  InputsDiv,
  LabelInput,
  LabelName,
} from "./Filter.styled";

import { selectFilter } from "../../redux/slice/selectors";
import { resetFilter, setFilter } from "../../redux/slice/slise";
import { useCreateOwnMakes } from "../../services/hook";
import { carStyles, priceStyles } from "../../styles/SelectStyles";

const generatePriceOptions = () =>
  [...Array(30)].map((_, i) => ({
    label: `${(i + 1) * 10}`,
    value: (i + 1) * 10,
  }));

const Filter = ({ cars }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const ownBrands = useCreateOwnMakes(cars, "make");
  const brandOptions = ownBrands.map((brand) => ({
    value: brand,
    label: brand,
  }));
  const priceOptions = generatePriceOptions();

  useEffect(() => {
    reset(filter);
  }, [filter, reset]);

  const onSubmit = (data) => {
    if (Object.values(data).every((value) => !value)) {
      toast.error("Please choose at least one filter");
      return;
    }

    dispatch(setFilter(data));
  };

  const resetReduxFilter = () => {
    const formData = {
      brand: "",
      price: "",
      from: "",
      to: "",
    };

    reset(formData);
    dispatch(resetFilter());
    toast.success("Filter reset");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FilterContainer>
        <LabelInput>
          <LabelName>Car brand</LabelName>
          <Controller
            name="brand"
            render={({ field }) => (
              <Select
                {...field}
                options={brandOptions}
                isSearchable={true}
                styles={carStyles}
                placeholder="Enter the text"
              />
            )}
            control={control}
            defaultValue=""
          />
        </LabelInput>

        <LabelInput>
          <LabelName>Price/ 1 hour</LabelName>
          <Controller
            name="price"
            render={({ field }) => (
              <Select
                {...field}
                options={priceOptions}
                styles={priceStyles}
                placeholder="to"
              />
            )}
            control={control}
            defaultValue=""
          />
        </LabelInput>

        <LabelInput>
          <LabelName>Car mileage / km</LabelName>
          <InputsDiv>
            <InputMin
              type="number"
              {...register("from", { valueAsNumber: true, min: 0 })}
            />
            {errors.from && errors.from.type === "min" && (
              <p>Enter a valid number</p>
            )}

            <InputMax
              type="number"
              {...register("to", { valueAsNumber: true, min: 0 })}
            />
            {errors.to && errors.to.type === "min" && (
              <p>Enter a valid number</p>
            )}
          </InputsDiv>
        </LabelInput>

        <ButtonDiv>
          <Button type="submit" value="search" />
          <Button type="button" value="reset" onClick={resetReduxFilter} />
        </ButtonDiv>
      </FilterContainer>
    </form>
  );
};

export default Filter;
