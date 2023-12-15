import { useSelector } from "react-redux";
import { CheckoutForm,CartTotals,SectionTitle } from "../components";


const Checkout = ()=>{
    const cartItems = useSelector((state)=>{
        return state.cartSlice.cartTotal
    });
    if(cartItems.length == 0){
        return <SectionTitle text = {'Your cart is empty'}></SectionTitle>
    }
    return (
        <>
        <SectionTitle text = "Place your order"></SectionTitle>
        <div className=" mt-8 grid md:grid-cols-2">
            <CheckoutForm></CheckoutForm>
            <CartTotals></CartTotals>
        </div>
        </>
    );
}

export default Checkout;