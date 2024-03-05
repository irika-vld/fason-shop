import Card from "../card";
import {
  useGetCategoriesQuery,
  useGetProductQuery,
} from "../../services/productsService";
import Header from "../headers/header";
import PresentationBlock from "../Presentation/presentationBlock";
import ProductDetails from "../productDetails";
import { useLayoutEffect, useRef, useState } from "react";
import Menu from "../menu";
import Search from "../search";
import { Link } from "react-router-dom";

interface Props {
  detailsIsOpenHandler: (id: number) => void;
  isDetailOpen: boolean;
  setIsDetailsOpen: (x: boolean) => void;
  cardId: number;
}

const Home = ({
  detailsIsOpenHandler,
  isDetailOpen,
  setIsDetailsOpen,
  cardId,
}: Props) => {
  const { data: products, isLoading, error } = useGetProductQuery(null);
  const { data: categories } = useGetCategoriesQuery(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const value = searchValue.toLowerCase();
  const filtredProducts = products?.filter(
    (product) =>
      product.title.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value)
  );

  const handleSize = () => {
    window.innerWidth >= 1280 && setIsMenuOpen(false);
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  const categoryRef = useRef(null);

  const titleClick = () => {
    categoryRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        setIsSearchOpen={setIsSearchOpen}
        isSearchOpen={isSearchOpen}
        titleClick={titleClick}
      />
      <div className="mt-12 px-1 sm:px-5">
        {isSearchOpen && <Search setSearchValue={setSearchValue} />}
        <ul ref={categoryRef} className="grid grid-cols-2 sm:flex mb-4">
          {categories?.map((category) => (
            <Link
              to={`/categories/${category}`}
              key={category}
              className="w-full text-sm sm:text-base sm:w-1/4 h-10 flex justify-center items-center border border-gray-100 cursor-pointer hover:bg-gray-100 hover:text-fuchsia-800"
            >
              {category}
            </Link>
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
