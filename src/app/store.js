import { configureStore } from "@reduxjs/toolkit";
import gameDataReducer from "./features/gameDataSlice";

export const store = configureStore({
  reducer: {
    gameData: gameDataReducer,
  },
});
