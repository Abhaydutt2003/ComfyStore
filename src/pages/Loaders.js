import { customFetch } from "../utils";

const url = "products?featured=true";

export const landingLoader = async () => {
  const response = await customFetch(url);
  //console.log(response);
  const products = response.data.data;
  return { products };
};
