import { useSelector } from "react-redux";
import { SectionTitle, CartItemsList, CartTotals } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = null;
  const numItemsCart = useSelector((state) => {
    return state.cartSlice.numItemsCart;
  });
  if (numItemsCart == 0) {
    return <SectionTitle text="Your cart is Empty" />;
  }
  return (
    <SectionTitle text="Shopping Cart">
      <div>
        <CartItemsList></CartItemsList>
      </div>
      <div>
        <CartTotals></CartTotals>
        {user ? (
          <Link to="/checkout"> Proceed to Checkout</Link>
        ) : (
          <Link to="/login">Please login</Link>
        )}
      </div>
    </SectionTitle>
  );
};
export default Cart;
