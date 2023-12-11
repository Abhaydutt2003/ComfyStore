import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defualtState = {
  cartItems: [],
  numItemsCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defualtState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
    },
    clearCart: (state) => {},
    removeItem: (state, action) => {},
    editItem: (state, action) => {},
  },
});
export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
