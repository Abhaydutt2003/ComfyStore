import { redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

const url = "products?featured=true";
const url2 = "/products";

export const landingLoader = async () => {
  const response = await customFetch(url);
  //console.log(response);
  const products = response.data.data;
  return { products };
};

export const singleProductLoader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

export const productsLoader = async ({ request }) => {
  //get all the params passed
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url2, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

export const checkoutLoader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

export const ordersLoader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must be logged in to view the orders");
      return redirect("/login");
    }
    //LOOK
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries()
    ]);
    try {
      const response = await customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      //console.log({ orders: response.data.data, meta: response.data.meta });
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.message || "There was an error getting you orders";
      toast.error(errorMessage);
      const status = error?.response?.status;
      if (status == 401 || status == 403) {
        return redirect("/login");
      }
      return null; 
    }
  };
