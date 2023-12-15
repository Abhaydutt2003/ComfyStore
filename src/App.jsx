import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";
import { ErrorElement } from "./components";
import {
  landingLoader,
  singleProductLoader,
  productsLoader,
  checkoutLoader
} from "./pages/Loaders";
import { registerAction, loginAction,checkoutAction } from "./pages/actions";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        loader: landingLoader,
        errorElement: ErrorElement,
      },
      {
        path: "/products",
        loader: productsLoader,
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: <SingleProduct></SingleProduct>,
        loader: singleProductLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/about", element: <About /> },
      {
        path: "/checkout",
        element: <Checkout />,
        loader:checkoutLoader(store),
        action:checkoutAction(store)
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
    errorElement: <Error></Error>,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
