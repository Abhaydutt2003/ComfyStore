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
import { landingLoader,singleProductLoader,productsLoader } from "./pages/Loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        loader:landingLoader,
        errorElement:ErrorElement,
      },
      {
        path: "/products",
        loader:productsLoader,
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: <SingleProduct></SingleProduct>,
        loader:singleProductLoader
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/about", element: <About /> },
      {
        path: "/checkout",
        element: <Checkout />,
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
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
