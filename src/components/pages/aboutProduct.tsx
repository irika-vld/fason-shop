import { useParams } from "react-router-dom";
import { useGetProductbyIdQuery } from "../../services/productsService";
import HeaderPages from "../headers/headerPages";
import { useAppDispatch } from "../../hooks/redux";
import { addToCart } from "../../store/slices/productsSlice";
import { Grid } from "react-loader-spinner";

const AboutProduct = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductbyIdQuery(id);

  const dispatch = useAppDispatch();

  return (
    <>
      <HeaderPages />
      <div className="mt-14 px-1 sm:px-5">
        {isLoading ? (
          <Grid
            visible={true}
            height="30"
            width="30"
            color="#c213b9"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="flex h-128 justify-center items-center"
          />
        ) : (
          <div className="h-full">
            {data ? (
              <>
                <div className="flex flex-col sm:flex-row gap-7 p-2 sm:p-9 h-full">
                  <div className="flex justify-center sm:w-1/3 h-80 md:h-128">
                    <img className="sm:h-2/3 object-contain" src={data.image} alt="product" />
                  </div>
                  <div className="flex flex-col gap-9 w-full sm:w-2/3 h-2/3 justify-between">
                    <div className="flex flex-col gap-5">
                      <span className="text-xl sm:text-3xl font-semibold">
                        {data.title}
                      </span>
                      <span className="text-zinc-700 italic text-sm">
                        {data.category}
                      </span>
                      <p className="flex text-wrap text-xs sm:text-base">{data.description}</p>
                    </div>
                    <div className="flex flex-col gap-3 items-end">
                      <div className="flex gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 fill-yellow-300"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div>{data.rating.rate}</div>
                      </div>
                      <div className="flex gap-3 text-sm">
                        <span>available:</span>
                        <div>{data.rating.count}</div>
                      </div>
                    </div>

                    <span className="text-2xl font-semibold text-right text-fuchsia-800 mb-4">
                      $ {data.price}
                    </span>
                  </div>
                </div>
                <div className="flex justify-end p-7">
                  <button className="w-full sm:w-1/6 h-11 bg-gray-300 hover:bg-fuchsia-200">
                    add to favorites
                  </button>
                  <button
                    className="w-full sm:w-1/6 h-11 bg-fuchsia-700 hover:bg-fuchsia-200"
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
              </>
            ) : (
              <h2>Unfortunately, the product was not found</h2>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AboutProduct;
