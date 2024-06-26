import { TLoading } from "@customTypes/sharedTypes";
import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";

interface IAuthState {
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string
    } | null,
    error: string | null;
    loading: TLoading;
    accessToken: string | null;
}


const initialState: IAuthState = {
    error: null,
    loading: "idle",
    accessToken: null,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        restUI: (state) => {
            state.error = null;
            state.loading = "idle";
        }
    },
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
        // login
        builder.addCase(actAuthLogin.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actAuthLogin.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.accessToken = action.payload.accessToken
            state.user = action.payload.user
        });
        builder.addCase(actAuthLogin.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    }
})

export { actAuthRegister, actAuthLogin }
export const {restUI} = authSlice.actions
export default authSlice.reducer