import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const plant = action.payload;
      const existingPlant = state.cartItems.find((item) => item.id === plant.id);

      if (existingPlant) {
        existingPlant.quantity += 1;
      } else {
        state.cartItems.push({ ...plant, quantity: 1 });
      }

      // Update total quantity and cost
      state.totalQuantity += 1;
      state.totalCost += plant.cost;
    },

    // Remove item from cart
    removeItem: (state, action) => {
      const plantId = action.payload;
      const existingPlant = state.cartItems.find((item) => item.id === plantId);

      if (existingPlant) {
        // Decrease total quantity and total cost
        state.totalQuantity -= existingPlant.quantity;
        state.totalCost -= existingPlant.quantity * existingPlant.cost;

        // Remove the item from the cart
        state.cartItems = state.cartItems.filter((item) => item.id !== plantId);
      }
    },

    // Update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingPlant = state.cartItems.find((item) => item.id === id);

      if (existingPlant && quantity > 0) {
        // Adjust total cost and quantity
        const quantityDifference = quantity - existingPlant.quantity;
        state.totalQuantity += quantityDifference;
        state.totalCost += quantityDifference * existingPlant.cost;

        // Update plant's quantity in the cart
        existingPlant.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

