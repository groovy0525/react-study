import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import basketReducer from "../features/cart/cartSlice";
import menuReducer from "../features/menu/menuSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    menu: menuReducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
