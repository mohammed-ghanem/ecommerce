import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import categories from './categories/CategoriesSlice'
import products from './products/ProductsSlice'
import cart from "./cart/cartSlice"
import Wishlist from './whisList/WishlistSlice';
import auth from './auth/authSlice'


const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  whitelist: ["itemsId"],
};

const rootReducer = combineReducers({
  categories,
  products,
  cart: persistReducer(cartPersistConfig, cart),
  Wishlist: persistReducer(wishlistPersistConfig, Wishlist),
  auth,
});


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



const persistor = persistStore(store);
export { store, persistor };