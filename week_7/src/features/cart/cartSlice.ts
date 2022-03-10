import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Menu, Order } from "../../types";

interface CartState {
  totalCount: number;
  orders: Order[];
}

const initialState: CartState = {
  totalCount: 0,
  orders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      state.totalCount += 1;

      const idx = state.orders.findIndex(
        order => order.id === action.payload.id
      );

      if (idx === -1) {
        state.orders.push({ ...action.payload, count: 1 });
      } else {
        state.orders[idx].count += 1;
      }
    },
  },
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
