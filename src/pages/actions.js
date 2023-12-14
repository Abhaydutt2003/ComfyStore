import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { redirect } from "react-router-dom";
import { fromJSON } from "postcss";
import { loginUser } from "../features/user/useSlice";
import { useDispatch } from "react-redux";

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    console.log(response);
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message || "please check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

export const loginAction =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error("please check your credentials");
      toast.error(errorMessage);
      return null;
    }
  };
