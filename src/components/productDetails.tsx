import { Link } from "react-router-dom";
import { useGetProductbyIdQuery } from "../services/productsService";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { addToCart } from "../store/slices/productsSlice";

interface Props {
  cardId: number;
  setIsDetailsOpen: (x: boolean) => void;
}

const ProductDetails = ({
  cardId,
  setIsDetailsOpen,
}: Props) => {
  const { data } = useGetProductbyIdQuery(cardId);
  const dispatch = useAppDispatch();

  const prodInCart = useAppSelector((state) => state.products.products);
  const currentProduct = prodInCart.find((el) => el.id === cardId);

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 m-auto bg-white w-2/3 h-4/5 z-10">
      {data ? (
        <div className="h-full flex flex-col">
          <div className="flex flex-col items-center md:items-start md:flex-row gap-7 p-3 md:p-9 h-full">
            <div className="w-2/5  h-1/3 md:h-4/5">
              <img
                className="h-full w-full max-h-64 md:max-h-80 object-contain"
                src={data.image}
                alt="product"
              />
            </div>
            <div className="flex flex-col gap-9 w-3/5 justify-between">
              <div className="flex flex-col gap-5">
                <span className="w-full text-sm md:text-lg font-semibold">
                  {data.title}
                </span>
                <span className="text-zinc-700 italic text-sm">
                  {data.category}
                </span>
              </div>
              <span className="text-lg md:text-2xl font-semibold text-right text-fuchsia-800 mb-1 md:mb-40">
                $ {data.price}
              </span>
            </div>
          </div>
          <div className="text-sm md:text-base flex justify-center">
            <Link
              to={`/product/${cardId}`}
              className="w-2/5 h-11 p-1 bg-gray-300 hover:bg-fuchsia-200 flex justify-center items-center"
            >
              details
            </Link>

            <button
              className="w-2/5 md:w-1/4 h-11 p-1 bg-fuchsia-700 hover:bg-fuchsia-200"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.title,
                    price: data.price,
                    image: data.image,
                    rating: {
                      rate: data.rating.rate,
                      count: data.rating.count,
                    },
                    quantity: 1,
                  })
                )
              }
            >
              add to cart
            </button>
          </div>
        </div>
      ) : (
        <h2>Unfortunately, the product was not found</h2>
      )}
      <button
        className="absolute top-2 right-2"
        onClick={() => setIsDetailsOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 hover:stroke-fuchsia-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
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

export default ProductDetails;
