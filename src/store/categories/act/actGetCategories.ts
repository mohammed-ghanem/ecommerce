import { createAsyncThunk } from "@reduxjs/toolkit/react";
import axios from "axios";
import { TCategory } from "@customTypes/sharedCategory";


type TResponse = TCategory[]

const actGetCategories = createAsyncThunk("categries/actGetCategories",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI

        try {
            const response = await axios.get<TResponse>('http://localhost:5005/categories')
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("An unexpected error");
            }
        }
    })

export default actGetCategories