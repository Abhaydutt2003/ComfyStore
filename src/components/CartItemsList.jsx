import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const { cartItems } = useSelector((state) => {
    return state.cartSlice;
  });
  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item}></CartItem>;
      })}
    </div>
  );
};
export default CartItemsList;
