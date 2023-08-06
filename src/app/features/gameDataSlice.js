import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const options = {
    method: "GET",
    url: import.meta.env.VITE_API_URL + "/games",
    params: {
      title: "assassin",
      exact: "0",
      limit: "16",
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
    },
  };

  const response = await axios.request(options);
  return response.data;
});

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const gameDataSlice = createSlice({
  name: "gameData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default gameDataSlice.reducer;
