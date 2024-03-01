import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Home from "./components/pages/home.tsx";
import Favorites from "./components/pages/favorites.tsx";
import Cart from "./components/pages/cart.tsx";
import AboutProduct from "./components/aboutProduct.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: '/product/:id',
    element: <AboutProduct />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
