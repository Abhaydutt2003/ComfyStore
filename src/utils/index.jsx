import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarAmount = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd",
  }).format(price / 100);
  return dollarAmount;
};

export const generateAmount = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

export const generate2 = (number) => {
  const arr = new Array(number).fill(0);
  return arr.map((_,index) => {
    return (
      <option key={index + 1} value={index + 1}>
        {index + 1}
      </option>
    );
  });
};
