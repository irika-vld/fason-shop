import Card from "../card";
import {
  useGetCategoriesQuery,
  useGetProductQuery,
} from "../../services/productsService";
import Header from "../header";
import Footer from "../footer";
import PresentationBlock from "../Presentation/presentationBlock";
import ProductDetails from "../productDetails";
import { useLayoutEffect, useState } from "react";
import Menu from "../menu";
import Search from "../search";

const Home = () => {
  const { data: products, isLoading, error } = useGetProductQuery(null);
  const { data: categories } = useGetCategoriesQuery(null);

  const [isDetailOpen, setIsDetailsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [cardId, setCardId] = useState(0);

  const value = searchValue.toLowerCase();
  const filtredProducts = products?.filter(
    (product) =>
      product.title.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value)
  );

  const detailsIsOpenHandler: (id: number) => void = (id) => {
    setIsDetailsOpen(true);
    setCardId(id);
  };

  const handleSize = () => {
    window.innerWidth >= 1280 && setIsMenuOpen(false);
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <>
      <Header
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        setIsSearchOpen={setIsSearchOpen}
        isSearchOpen={isSearchOpen}
      />
      <div className="mt-12 px-1 sm:px-5">
        {isSearchOpen && (
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        )}
        <ul className="grid grid-cols-2 sm:flex mb-4">
          {categories?.map((category) => (
            <li
              key={category}
              className="w-full text-sm sm:text-base sm:w-1/4 h-10 flex justify-center items-center border border-gray-100 cursor-pointer hover:bg-gray-100 hover:text-fuchsia-800"
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="w-full h-full">
          <PresentationBlock />
        </div>
        <div className="mt-8 mb-5 flex relative gap-5">
          <div className="hidden xl:block sticky h-full w-1/5">
            <Menu />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-1.5 gap-y-1.5 sm:gap-y-6 xl:w-4/5">
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error.error}</h2>}
            {filtredProducts?.map((product) => (
              <Card
                key={product.id}
                {...product}
                detailsIsOpenHandler={detailsIsOpenHandler}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      {isDetailOpen && (
        <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50">
          <ProductDetails setIsDetailsOpen={setIsDetailsOpen} cardId={cardId} />
        </div>
      )}
      {isMenuOpen && (
        <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50">
          <Menu />
        </div>
      )}
    </>
  );
};

export default Home;