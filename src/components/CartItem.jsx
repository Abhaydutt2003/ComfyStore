import { generateAmount, formatPrice } from "../utils";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;
  const handleAmount = (event) => {
    dispatch(editItem({ cartID, amount: parseInt(event.target.value) }));
  };
  const removeItemFromCart = ()=>{
    dispatch(removeItem({cartID}));
  }

  return (
    <div className=" mb-12 flex flex-col gap-y-4 sm:flex-row  border-b border-base-300 pb-6 last:border-b-0">
      <img
        src={image}
        alt={title}
        className="h-24 w-24 sm:h-32 sm:w-32 object-cover rounded-lg"
      ></img>
      {/* PRODINFO */}
      <div className="sm:ml-16 sm:w-48">
        <h3 className=" capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      {/* AMOUNT */}
      <div className="sm:ml-12 form-control max-w-xs">
        <label htmlFor="amount" className="label p-0">
          <span className="lable-text">Amount</span>
        </label>
        <select
          name="amount"
          className="mt-2 select select-base select-bordered select-xs"
          id="amount"
          value={amount}
          onChange={handleAmount}
        >
          {generateAmount(amount + 6)}
        </select>
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromCart}
        >
          remove
        </button>
      </div>
      <p className="font-medium  sm:ml-auto"> {formatPrice(price)}</p>
    </div>
  );
};
export default CartItem;
