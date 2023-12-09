import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65229d9ef43b17938414b3aa.mockapi.io/api";

export const fetchAllCars = createAsyncThunk(
  "cars/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/advert");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

fetchAllCars();