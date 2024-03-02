import { Link } from "react-router-dom";
import { useGetProductbyIdQuery } from "../services/productsService";
import { useAppDispatch } from "../hooks/redux";
import { addToCart } from "../store/reducers/productsSlice";

interface Props {
  cardId: number;
  setIsDetailsOpen: (x: boolean) => void;
}

const ProductDetails = ({ cardId, setIsDetailsOpen }: Props) => {
  const { data } = useGetProductbyIdQuery(cardId);
  const dispatch = useAppDispatch();

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 m-auto bg-white w-2/3 h-4/5">
      {data ? (
        <div className="h-full flex flex-col">
          <div className="flex gap-7 p-9 h-full">
            <div className="w-2/5 h-full">
              <img src={data.image} alt="product" />
            </div>
            <div className="flex flex-col gap-9 w-3/5 justify-between">
              <div className="flex flex-col gap-5">
                <span className="text-lg font-semibold">{data.title}</span>
                <span className="text-zinc-700 italic text-sm">
                  {data.category}
                </span>
              </div>
              <span className="text-2xl font-semibold text-right text-fuchsia-800 mb-40">
                $ {data.price}
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              to={`/product/${cardId}`}
              className="w-1/4 h-11 bg-gray-300 hover:bg-fuchsia-200 flex justify-center items-center"
            >
              details
            </Link>

            <button
              className="w-1/4 h-11 bg-fuchsia-700 hover:bg-fuchsia-200"
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
    </div>
  );
};

export default ProductDetails;
