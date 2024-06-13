import { TLoading } from "@customTypes/sharedTypes";
import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";

interface IAuthState {
    error: string | null;
    loading: TLoading;
}


const initialState: IAuthState = {
    error: null,
    loading: "idle",
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actAuthRegister.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actAuthRegister.fulfilled, (state) => {
            state.loading = "succeeded";
        });
        builder.addCase(actAuthRegister.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    }
})

export { actAuthRegister }
export default authSlice.reducer