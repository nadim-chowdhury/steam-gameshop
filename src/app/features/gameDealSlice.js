import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchDealsData = createAsyncThunk("games/fetchDeals", async () => {
  const options = {
    method: "GET",
    url: import.meta.env.VITE_API_URL + "/deals",
    params: {
      lowerPrice: "0",
      steamRating: "0",
      title: "batman",
      desc: "0",
      output: "json",
      steamworks: "0",
      sortBy: "Deal Rating",
      AAA: "0",
      pageSize: "60",
      exact: "0",
      upperPrice: "50",
      pageNumber: "0",
      onSale: "0",
      metacritic: "0",
      "storeID[0]": "1,2,3",
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const dealDataSlice = createSlice({
  name: "dealData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDealsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDealsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDealsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dealDataSlice.reducer;
