import { useSelector } from "react-redux";
import { SectionTitle, CartItemsList, CartTotals } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state)=>{
    return state.userState.user;
  });
  const numItemsCart = useSelector((state) => {
    return state.cartSlice.numItemsCart;
  });
  if (numItemsCart == 0) {
    return <SectionTitle text="Your cart is Empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid grid-gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList></CartItemsList>
        </div>
        <div className="lg:col-span-4 lg:pl-10">
          <CartTotals></CartTotals>
          {user ? (
            <Link to="/checkout"  className='btn btn-primary btn-block mt-8'> Proceed to Checkout</Link>
          ) : (
            <Link to="/login" className='btn btn-primary btn-block mt-8'>Please login</Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
