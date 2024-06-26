import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@util/axiosErrorHandler";
import axios from "axios";


type TFormData = {
    email: string,
    password: string,
}

const actAuthLogin = createAsyncThunk('/auth/actAuthLogin',
    async (formData: TFormData, thunkAPI) => {
        const { rejectWithValue } = thunkAPI
        try {
            const res = await axios.post("/login", formData)
            return res.data
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error))
        }
    })

export default actAuthLogin