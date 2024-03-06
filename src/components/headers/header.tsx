import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { useEffect, useRef } from "react";
import { IHeader } from "../../interfaces/interfaces";

const Header = ({
  setIsMenuOpen,
  isMenuOpen,
  isSearchOpen,
  setIsSearchOpen,
  titleClick,
}: IHeader) => {
  const countInCart = useAppSelector((state) => state.products.products);
  const countInFav = useAppSelector((state) => state.favorites.favorites);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(countInFav);
      localStorage.setItem("favorites", json);
      const jsonCart = JSON.stringify(countInCart);
      localStorage.setItem("cart", jsonCart);
    }
    isMounted.current = true;
  }, [countInFav, countInCart]);

  return (
    <header className="h-12 flex fixed top-0 justify-between items-center w-screen px-5 gap-3 bg-white border-b-2 border-gray-100 z-10">
      <div className="flex gap-2.5">
        {!isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="header-svg xl:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="header-svg xl:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="header-svg"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <h1
        className="uppercase text-xl sm:text-3xl italic font-bold tracking-widest hover:text-fuchsia-800 cursor-pointer"
        onClick={titleClick}
      >
        Fason
      </h1>
      <div className="flex gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="header-svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <Link to={"/favorites"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="header-svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          {countInFav.length > 0 && (
            <div className="w-5 h-5 absolute top-1 right-11 bg-fuchsia-900 rounded-full">
              <span className="text-white absolute top-0 right-1 text-sm">
                {countInFav.length}
              </span>
            </div>
          )}
        </Link>
        <Link to={"/cart"}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="header-svg relative"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {countInCart.length > 0 && (
              <div className="w-5 h-5 absolute top-1 right-4 bg-fuchsia-900 rounded-full">
                <span className="text-white absolute top-0 right-1 text-sm">
                  {countInCart.length}
                </span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
