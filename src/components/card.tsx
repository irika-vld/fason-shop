import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../store/slices/favoritesSlice";
import { ICard } from "../interfaces/interfaces";

const Card = ({
  id,
  title,
  price,
  image,
  category,
  detailsIsOpenHandler,
}: ICard) => {
  const dispatch = useAppDispatch();

  const prodInFavorites = useAppSelector((state) => state.favorites.favorites);
  const favoriteProduct = prodInFavorites.find((el) => el.id === id);

  const inFavoritesHandler = () => {
    if (!favoriteProduct) {
      dispatch(
        addToFavorites({
          id,
          title,
          price,
          image,
          category,
        })
      );
    } else {
      dispatch(removeFromFavorites(id));
    }
  };

  const prodInCart = useAppSelector((state) => state.products.products);
  const currentProduct = prodInCart.find((el) => el.id === id);

  return (
    <div className="flex flex-col h-full max-h-96 md:max-h-[32rem] min-h-56 w-full min-w-28 max-w-xs mb-2 border border-fuchsia-50 relative">
      <Link to={`/product/${id}`} className="flex flex-col">
        <div className="flex justify-center mb-2">
          <img
            className="object-contain h-64 md:h-80 w-full min-w-24 max-w-72"
            src={image}
            alt="product"
          />
        </div>

        <div className="px-1.5 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xs md:text-base font-semibold text-wrap tracking-tighter sm:tracking-normal h-14 md:h-20 truncate">
              {title}
            </h3>
            <span className="text-xs md:text-md text-zinc-700">{category}</span>
          </div>
          <div>
            <span className="text-sm md:text-lg font-extrabold self-end">
              $ {price}
            </span>
          </div>
        </div>
      </Link>

      <button onClick={inFavoritesHandler}>
        {favoriteProduct ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer absolute right-1 top-2 fill-fuchsia-900"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="header-svg absolute right-1 top-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        )}
      </button>
      <button onClick={() => detailsIsOpenHandler(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="header-svg absolute right-1 bottom-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>
      {currentProduct && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 absolute top-2 left-2 fill-green-600"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

export default Card;
