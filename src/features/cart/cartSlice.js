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

const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || defualtState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCart,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((item) => {
        return item.cartID == product.cartID;
      });
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item added to cart");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defualtState));
      return defualtState;
    },
    removeItem: (state, action) => {
      //console.log(action.payload);
      const { cartID } = action.payload;
      const product = state.cartItems.find((item) => {
        return item.cartID == cartID;
      });
      state.cartItems = state.cartItems.filter((item) => {
        return item.cartID != cartID;
      });
      state.numItemsCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.info("Item removed from cart");
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((item) => {
        return item.cartID == cartID;
      });
      state.numItemsCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.info("Cart updated");
    },
  },
});
export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
