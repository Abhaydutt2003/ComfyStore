import { formatPrice } from "../utils";

import { Link, useLoaderData } from "react-router-dom";

const ProductsList = () => {
  const { products } = useLoaderData();
  return (
    <div>
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <Link key={product.id} to={"/products/${product.id}"}>
            <img src={image} alt={title}></img>
            <div>
              <h3> {title}</h3>
              <h4>{company}</h4>
            </div>
            <p>{dollarAmount}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
