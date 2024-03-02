import { useAppSelector } from "../../hooks/redux";
import Footer from "../footer";
import HeaderPages from "../headerPages";

const Cart = () => {
  const products = useAppSelector((state) => state.products.products);

  return (
    <>
      <HeaderPages />
      <div className="mt-20 mx-5 mb-5">
        <h2 className="text-2xl font-semibold text-center">Shopping Cart</h2>
        <div className="flex">
          <ul className="w-11/12 m-3">
            {products.map((product) => (
              <li className="flex gap-10 border-b-2 border-gray-100 p-3">
                <img className="w-1/6" src={product.image} alt="product" />
                <div className="flex flex-col gap-8 w-4/6">
                  <div className="flex justify-between">
                    <span className="font-extrabold">{product.title}</span>
                    <span className="text-fuchsia-900 font-extrabold">
                      $ {product.price}
                    </span>
                  </div>
                  <div className="flex flex-col text-xs gap-2">
                    <div className="flex gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 fill-yellow-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{product.rating.rate}</span>
                    </div>

                    <span>remainder: {product.rating.count}</span>
                  </div>
                </div>
                <div className="w-1/6 relative">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <span>Qty:</span>
                      <span className="font-extrabold">{product.quantity}</span>
                    </div>
                    <div>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 stroke-fuchsia-900 hover:scale-105"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 stroke-fuchsia-900 hover:scale-105"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button className="absolute bottom-1 right-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 stroke-gray-400 hover:stroke-fuchsia-900"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button className="flex w-1/12 justify-center text-sm text-gray-400 hover:text-fuchsia-900">
            Clear the cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
