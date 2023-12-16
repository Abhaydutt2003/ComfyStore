import { useLoaderData } from "react-router-dom";
import { SectionTitle,OrdersList,ComplexPaginationContainer } from "../components";

const Orders = ()=>{
    console.log(useLoaderData());
    const {meta} = useLoaderData();
    if(meta.pagination.total<1){
        return <SectionTitle text = "You have made no orders yet"></SectionTitle>
    }
    return(
        <>
        <SectionTitle text = "Your Orders"/>
        <OrdersList/>
        <ComplexPaginationContainer/>
        </>
    );
}

export default Orders;