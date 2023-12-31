import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/useSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  const itemsCart = useSelector((state) => {
    return state.cartSlice.numItemsCart;
  });
  const isDarkTheme = useSelector((state) => {
    return state.userState.theme == "dracula";
  });
  return (
    <nav className=" bg-base-200">
      <div className=" navbar align-element">
        <div className="navbar-start">
          {/* title */}
          <NavLink
            to="/"
            className=" hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          {/* Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6"></FaBarsStaggered>
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks></NavLinks>
            </ul>
          </div>
        </div>
        <div className=" navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <NavLinks></NavLinks>
          </ul>
        </div>
        <div className=" navbar-end">
          {/* theme icon */}
          {/* cart */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleTheme}
              defaultChecked={isDarkTheme}
            ></input>
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <NavLink
            to="cart"
            className="btn btn-primary btn-ghost btn-circle btn-md ml-4"
          >
            <div className=" indicator">
              <span className="badge badge-sm badge-primary indicator-item">
                {itemsCart}
              </span>
              <BsCart3 className="h-6 w-6"></BsCart3>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
