import Card from "../card";
import {
  useGetCategoriesQuery,
  useGetProductQuery,
} from "../../services/productsService";
import Header from "../headers/header";
import PresentationBlock from "../Presentation/presentationBlock";
import ProductDetails from "../productDetails";
import { useEffect, useLayoutEffect, useState } from "react";
import Menu from "../menu";
import Search from "../search";
import { Link } from "react-router-dom";
import { Grid } from "react-loader-spinner";
import { ICardDetails } from "../../interfaces/interfaces";
import SignIn from "../signIn";
import Registration from "../registration";
import Pagination from "../pagination";

const Home = ({
  detailsIsOpenHandler,
  isDetailOpen,
  setIsDetailsOpen,
  cardId,
}: ICardDetails) => {
  const { data: products, isLoading, error } = useGetProductQuery(null);
  const { data: categories } = useGetCategoriesQuery(null);

  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const value = searchValue.toLowerCase();
  const filtredProducts = products?.filter(
    (product) =>
      product.title.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value)
  );

  const lastProductPerPageNum = currentPage * productsPerPage;
  const firstProductIndex = lastProductPerPageNum - productsPerPage;
  const currentProducts = filtredProducts?.slice(
    firstProductIndex,
    lastProductPerPageNum
  );

  const paginateFn: (x: number) => void = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleSize = () => {
    window.innerWidth >= 1280 && setIsMenuOpen(false);
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  const titleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setIsDetailsOpen(false);
  }, [setIsDetailsOpen]);

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
        <ul className="grid grid-cols-2 sm:flex mb-4">
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
            <Menu setIsSignInOpen={setIsSignInOpen} />
          </div>
          <div>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-1.5 gap-y-1.5 sm:gap-y-6">
              {isLoading && (
                <Grid
                  visible={true}
                  height="30"
                  width="30"
                  color="#c213b9"
                  ariaLabel="grid-loading"
                  radius="12.5"
                  wrapperStyle={{}}
                  wrapperClass="flex justify-center"
                />
              )}
              {error && <h2>An error occured: {error.error}</h2>}
              {currentProducts?.map((product) => (
                <Card
                  key={product.id}
                  {...product}
                  detailsIsOpenHandler={detailsIsOpenHandler}
                />
              ))}
            </div>
            {filtredProducts && (
              <Pagination
                productsPerPage={productsPerPage}
                totalyProducts={filtredProducts.length}
                paginateFn={paginateFn}
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
      </div>
      {isDetailOpen && (
        <div className="modal-fix">
          <ProductDetails setIsDetailsOpen={setIsDetailsOpen} cardId={cardId} />
        </div>
      )}
      {isMenuOpen && (
        <div className="modal-fix">
          <Menu setIsSignInOpen={setIsSignInOpen} />
        </div>
      )}
      {isSignInOpen && (
        <div className="modal-fix">
          <div className="h-full flex justify-center sm:justify-end">
            <SignIn
              setIsSignInOpen={setIsSignInOpen}
              setIsRegistrationOpen={setIsRegistrationOpen}
            />
          </div>
        </div>
      )}
      {isRegistrationOpen && (
        <div className="modal-fix">
          <div className="h-full flex justify-center sm:justify-end">
            <Registration setIsRegistrationOpen={setIsRegistrationOpen} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
