import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MenuState } from "../../types";
import { getMenuList } from "./menuAPI";

const initialState: MenuState = {
  loading: false,
  data: null,
  error: null,
};

export const getMenu = createAsyncThunk("menu/getList", async () => {
  const response = await getMenuList();
  return response;
});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMenu.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default menuSlice.reducer;
