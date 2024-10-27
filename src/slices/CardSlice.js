import { createSlice } from "@reduxjs/toolkit";
import { findById } from "../utils/helper";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    totalAmount: 0,
    list: [],
  },
  reducers: {
    DATA: (state, { payload }) => {
      payload.map((e) =>
        state.list.push({
          id: e.id,
          name: e.name,
          price: e.caloriesPerServing,
          cuisine: e.cuisine,
          rating: e.rating,
          quantity: 0,
          image: e.image,
        })
      );
    },
    INCREMENT: (state, { payload }) => {
      let localTotal = 0;
      state.list.map((item, index) => {
        let localQuantity = item.quantity;
        if (item.id === payload.id) {
          localQuantity = Number(payload.quantity);
        }
        if (localQuantity > 0) {
          const price = localQuantity * item.price;
          localTotal = localTotal + price;
        }
        if (item.id === payload.id) {
          state.list[index].quantity = payload.quantity;
        }
      });
      state.totalAmount = localTotal;
    },
  },
});

export const { DATA, INCREMENT } = cardSlice.actions;
export default cardSlice.reducer;
