import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Home from "./components/pages/home.tsx";
import Favorites from "./components/pages/favorites.tsx";
import Cart from "./components/pages/cart.tsx";
import AboutProduct from "./components/aboutProduct.tsx";
import CategoryPage from "./components/pages/categoryPage.tsx";

// const [isDetailOpen, setIsDetailsOpen] = useState(false);
// const [cardId, setCardId] = useState(0);

// const detailsIsOpenHandler: (id: number) => void = (id) => {
//   setIsDetailsOpen(true);
//   setCardId(id);
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home
        // detailsIsOpenHandler={detailsIsOpenHandler}
        // setIsDetailsOpen={setIsDetailsOpen}
        // setCardId={setCardId}
        // isDetailOpen={isDetailOpen}
        // cardId={cardId}
      />
    ),
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
    path: "/product/:id",
    element: <AboutProduct />,
  },
  {
    path: "/categories/:title",
    element: (
      <CategoryPage
        // detailsIsOpenHandler={detailsIsOpenHandler}
      />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
