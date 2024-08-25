// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';  // Import the cart slice reducer

// Configure the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer  // Assign the cart slice to the `cart` key
  }
});

export default store;

