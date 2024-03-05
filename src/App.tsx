import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import Home from "./components/pages/home";
import Favorites from "./components/pages/favorites";
import Cart from "./components/pages/cart";
import Footer from "./components/footer";
import AboutProduct from "./components/pages/aboutProduct";
import CategoryPage from "./components/pages/categoryPage";
import { useState } from "react";
import CustomerService from "./components/pages/customerService";
import AboutCompany from "./components/pages/aboutCompany";
import Legal from "./components/pages/legal";

const Layout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const [isDetailOpen, setIsDetailsOpen] = useState(false);
  const [cardId, setCardId] = useState(0);

  const detailsIsOpenHandler: (id: number) => void = (id) => {
    setIsDetailsOpen(true);
    setCardId(id);
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home
              detailsIsOpenHandler={detailsIsOpenHandler}
              isDetailOpen={isDetailOpen}
              setIsDetailsOpen={setIsDetailsOpen}
              cardId={cardId}
            />
          }
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/favorites"
          element={
            <Favorites
              detailsIsOpenHandler={detailsIsOpenHandler}
              isDetailOpen={isDetailOpen}
              setIsDetailsOpen={setIsDetailsOpen}
              cardId={cardId}
            />
          }
        ></Route>
        <Route path="/product/:id" element={<AboutProduct />}></Route>
        <Route
          path="/categories/:title"
          element={
            <CategoryPage
              detailsIsOpenHandler={detailsIsOpenHandler}
              isDetailOpen={isDetailOpen}
              setIsDetailsOpen={setIsDetailsOpen}
              cardId={cardId}
            />
          }
        ></Route>
        <Route path="/customer_service" element={<CustomerService />}></Route>
        <Route path="/about_us" element={<AboutCompany />}></Route>
        <Route path="/legal" element={<Legal />}></Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
