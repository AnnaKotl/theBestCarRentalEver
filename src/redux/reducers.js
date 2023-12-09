import { combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./slice/slise";

export const rootReducer = combineReducers({
  cars: carsReducer,
});
