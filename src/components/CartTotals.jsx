import { useSelector } from "react-redux";

const CartTotals = ()=>{
    const {cartTotal,shipping,tax,orderTotal} = useSelector((state)=>{
        return state.cartSlice;
    });

    return (
        <h1>never gonna</h1>
    );
}
export default CartTotals;