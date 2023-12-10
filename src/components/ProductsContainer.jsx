import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useState } from "react";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");
  //function for the button styles
  const layoutButtonStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };
  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between mt-8 border-b border-base-300 pb-5">
        <h4 className=" font-medium">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            className={layoutButtonStyles("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill></BsFillGridFill>
          </button>
          <button
            className={layoutButtonStyles("list")}
            onClick={() => setLayout("list")}
          >
            <BsList></BsList>
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <div>
        {totalProducts == 0 ? (
          <h4 className="text-2xl mt-16">
            Sorry no products matched your search
          </h4>
        ) : layout == "grid" ? (
          <ProductsGrid></ProductsGrid>
        ) : (
          <ProductsList></ProductsList>
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
