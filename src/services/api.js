import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65229d9ef43b17938414b3aa.mockapi.io";

export const fetchAllCars = createAsyncThunk(
  "cars/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/advert");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const carsReducer = createReducer([], (builder) => {
  builder
    .addCase(fetchAllCars.fulfilled, (state, action) => {
      return action.payload;
    })
    .addCase(fetchAllCars.rejected, (state, action) => {
    });
});

export default carsReducer;
