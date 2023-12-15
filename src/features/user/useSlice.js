import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getTheme = () => {
  const theme = localStorage.getItem("theme") || "winter";
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};
const getUser = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const initialState = {
  user: getUser(),
  theme: getTheme(),
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      //localStorage.clear();
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
    toggleTheme: (state) => {
      const newTheme = state.theme == "winter" ? "dracula" : "winter";
      state.theme = newTheme;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
