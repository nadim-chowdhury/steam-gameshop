import { configureStore } from "@reduxjs/toolkit";
import gameDataReducer from "./features/gameDataSlice";
import gameDealSlice from "./features/gameDealSlice";

export const store = configureStore({
  reducer: {
    gameData: gameDataReducer,
    dealData: gameDealSlice,
  },
});
