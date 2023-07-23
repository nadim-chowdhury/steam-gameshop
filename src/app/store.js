import { configureStore } from "@reduxjs/toolkit";
import { gameDataSlice } from "./features/gameDataSlice";

export const store = configureStore({
  reducer: {
    gameDataReducer: gameDataSlice,
  },
});
