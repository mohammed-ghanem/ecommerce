import { createSlice } from "@reduxjs/toolkit";

import { TProduct } from '@customTypes/sharedProducts';

interface ICartState {
    items: { [key: number]: number };
    productFullInfo: TProduct[];
}

const initialState: ICartState = {
    items: {},
    productFullInfo: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);

        },
    },
});


export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;