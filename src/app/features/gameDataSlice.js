import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchGames = createAsyncThunk("games/fetchGames", () => {
  return axios.get(
    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${
      import.meta.env.VITE_STEAM_API_KEY
    }&steamids=76561197960435530`
  ).then(res => );
});

export const gameDataSlice = createSlice({
  name: "gameData",
  initialState,
  reducers: {},
});

export const {} = gameDataSlice.actions;

export default gameDataSlice.reducer;
