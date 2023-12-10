import { formatPrice } from "../utils";

import { Link, useLoaderData } from "react-router-dom";

const ProductsList = () => {
  const { products } = useLoaderData();
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            className=" p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
            to={`/products/${product.id}`}
          >
            <img
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
              src={image}
              alt={title}
            ></img>
            <div className=" ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg"> {title}</h3>
              <h4 className=" capitalize text-neutral-content">{company}</h4>
            </div>
            <p className="font-medium text-lg ml-auto">
              {dollarAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
