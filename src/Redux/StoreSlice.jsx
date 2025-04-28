import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const storeSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(i => i.id !== item.id);
        }
      }
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(i => i.id !== itemId);
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  },
});

export const { addToCart, removeFromCart,deleteItem,clearCart } = storeSlice.actions;
export default storeSlice.reducer;
