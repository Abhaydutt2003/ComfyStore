import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getTheme = ()=>{
    const theme = localStorage.getItem("theme") || "winter";
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
}
const initialState = {
    user:{username:'Abhita'},
    theme:getTheme(),
}
const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        loginUser:(state,action)=>{
            console.log(action.payload);
        },
        logoutUser:(state,action)=>{
            state.user = null;
            //localStorage.clear();
            localStorage.removeItem('user');
            toast.success('Logged out successfully');
        },
        toggleTheme:(state)=>{
            const newTheme = state.theme == "winter" ? "dracula" : "winter";
            state.theme = newTheme;
            document.documentElement.setAttribute('data-theme', state.theme);
            localStorage.setItem('theme', state.theme);
        }
    }
});
export const {loginUser,logoutUser,toggleTheme} = userSlice.actions;
export default userSlice.reducer;