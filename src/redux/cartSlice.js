// import { createSlice } from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], // Array to store cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log('add item action', action.payload);

      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);

      if (existingItem) {
        // Update the quantity if the item already exists
        existingItem.quantity += item.quantity;
        // Automatically update the total price based on quantity and price
        // existingItem.totalPrice = existingItem.quantity * existingItem.price;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        // Add new item to cart
        state.cartItems.push({
          ...item,
          totalPrice: item.quantity * item.price,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    },
    clearCart: state => {
      state.cartItems = [];
    },
  },
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
