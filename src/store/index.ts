import { configureStore } from '@reduxjs/toolkit'
import categories from './categories/CategoriesSlice'
import Products from './products/ProductsSlice'
import cart from "./cart/cartSlice"
export const store = configureStore({
  reducer: { categories, Products, cart },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store