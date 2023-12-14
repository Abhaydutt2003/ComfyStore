import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './features/cart/cartSlice';
import userReducer from './features/user/useSlice';

export const store = configureStore({
    reducer:{
        cartSlice:cartReducer,
        userState:userReducer
    }
});