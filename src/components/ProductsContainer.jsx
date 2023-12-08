import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useState } from "react";


const ProductsContainer = ()=>{
    const totalProducts = useLoaderData().mata.pagination.total;
    const [layout,setLayout] = useState('grid');
    return(
        <>
        </>
    );
}

export default ProductsContainer;