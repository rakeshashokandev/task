import { configureStore } from '@reduxjs/toolkit';
import storetSlice from './StoreSlice'

export const store = configureStore({
  reducer: {
    cart: storetSlice,
  },
});
