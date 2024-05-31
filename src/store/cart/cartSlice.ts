import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByItems from "./act/actGetProductsByItems";

import { TProduct } from '@customTypes/sharedProducts';
import { TLoading } from "@customTypes/sharedTypes";

interface ICartState {
    items: { [key: string]: number };
    productsFullInfo: TProduct[];
    loading: TLoading;
    error: null | string;
  }

  const initialState: ICartState = {
    items: {},
    productsFullInfo: [],
    loading: "idle",
    error: null,
  };

  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const id = action.payload;
        if (state.items[id]) {
          state.items[id]++;
        } else {
          state.items[id] = 1;
        }
      },
    },
    extraReducers: (builder) => {
        builder.addCase(actGetProductsByItems.pending, (state) => {
          state.loading = "pending";
          state.error = null;
        });
        builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
          state.loading = "succeeded";
          state.productsFullInfo = action.payload
        });
        builder.addCase(actGetProductsByItems.rejected, (state, action) => {
          state.loading = "failed";
          if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
          }
        });
      },
  });
  

export { actGetProductsByItems }
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;