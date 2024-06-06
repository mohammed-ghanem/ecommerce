import { createSlice } from '@reduxjs/toolkit'
import actGetCategories from './act/actGetCategories'
import { TCategory } from '@customTypes/sharedCategory';
import { TLoading } from '@customTypes/sharedTypes';

interface ICategoriesState {
    record: TCategory[];
    loading: TLoading
    error: string | null;
}

const initialState: ICategoriesState = {
    record: [],
    loading: "idle",
    error: null,

}
const CategoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categoriesCleanUp: (state) => {
            state.record = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetCategories.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.record = action.payload
        })
        builder.addCase(actGetCategories.rejected, (state, action) => {
            state.loading = 'failed'
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload
            }
        })
    },


})
export { actGetCategories }
export const { categoriesCleanUp } = CategoriesSlice.actions
export default CategoriesSlice.reducer