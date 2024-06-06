import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@customTypes/sharedProducts"


type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk("wish/actGetWishlist", async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI

    try {
        const userWishlist = await axios.get<{ productId: number }[]>(
            "/wishlist?userId=1"
        );

        if (!userWishlist.data.length) {
            return fulfillWithValue([]);
        }
        const concatenatedItemsId = userWishlist.data
            .map((el) => `id=${el.productId}`)
            .join("&");

        const response = await axios.get(`/products?${concatenatedItemsId}`);
        return response.data as TResponse;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("An unexpected error");
        }
    }


})



export default actGetWishlist;