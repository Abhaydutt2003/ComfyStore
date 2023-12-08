import { useLoaderData } from "react-router-dom";
import { PaginationContainer, Filter, ProductsContainer } from "../components";


const Products = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Filter></Filter>
      <ProductsContainer></ProductsContainer>
      <PaginationContainer></PaginationContainer>
    </>
  );
};

export default Products;
