import { createSlice } from "@reduxjs/toolkit"
import actLikeToggle from "./act/actLikeToggle"
import actGetWishlist from './act/actGetWishlist'
import { TProduct } from "@customTypes/sharedProducts";
import { TLoading } from "@customTypes/sharedTypes";

interface IWishlist {
    itemsId: number[];
    productsFullInfo: TProduct[];
    error: null | string;
    loading: TLoading;

}

const initialState: IWishlist = {
    itemsId: [],
    productsFullInfo: [],
    error: null,
    loading: "idle",

}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        wishlistproductsFullInfoCleanUp: (state) => {
            state.productsFullInfo = []
        }
    },
    extraReducers(builder) {
        builder.addCase(actLikeToggle.pending, (state) => {
            state.error = null
        })
        builder.addCase(actLikeToggle.fulfilled, (state, action) => {
            if (action.payload.type === "add") {
                state.itemsId.push(action.payload.id)
            } else {
                state.itemsId = state.itemsId.filter((el) => el !== action.payload.id)
                state.productsFullInfo = state.productsFullInfo.filter(
                    (el) => el.id !== action.payload.id
                );
            }
        })
        builder.addCase(actLikeToggle.rejected, (state, action) => {
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload
            }
        })
        // get wishlist items
        builder.addCase(actGetWishlist.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetWishlist.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.productsFullInfo = action.payload;
        });
        builder.addCase(actGetWishlist.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },

})


export { actLikeToggle, actGetWishlist };
export const {wishlistproductsFullInfoCleanUp}= wishlistSlice.actions
export default wishlistSlice.reducer