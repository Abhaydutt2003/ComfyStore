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
  checkoutLoader,
  ordersLoader,
} from "./pages/Loaders";
import { registerAction, loginAction, checkoutAction } from "./pages/actions";
import { store } from "./store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        loader: landingLoader(queryClient),
        errorElement: ErrorElement,
      },
      {
        path: "/products",
        loader: productsLoader(queryClient),
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: <SingleProduct></SingleProduct>,
        loader: singleProductLoader(queryClient),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/about", element: <About /> },
      {
        path: "/checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store,queryClient),
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: ordersLoader(store,queryClient),
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router = {router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen = {false}></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

export default App;
