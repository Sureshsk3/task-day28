import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "../slices/CardSlice";
export default configureStore({
  devTools: true,
  reducer: {
    card: CardSlice
  },
});


