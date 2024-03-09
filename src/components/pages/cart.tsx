import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import HeaderPages from "../headers/headerPages";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../store/slices/productsSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = useAppSelector((state) => state.products.products);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let total = 0;
    let totalQty = 0;
    products.map((product) => {
      total += product.price * product.quantity;
      setTotalPrice(total.toFixed(2));
      totalQty += product.quantity;
      setTotalQuantity(totalQty);
    });
  }, [products]);

  return (
    <>
      <HeaderPages />
      {products.length ? (
        <div className="mt-20 mx-5 mb-5">
          <h2 className="text-2xl font-semibold text-center">Shopping Cart</h2>
          <div className="flex flex-col xl:flex-row">
            <ul className="flex flex-col sm:block w-full xl:w-11/12 m-3">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex flex-col items-center sm:items-start sm:flex-row gap-2 md:gap-10 h-full border-b-2 border-gray-100 p-3 sm:h-52"
                >
                  <img
                    className="w-full h-36 sm:h-full sm:w-1/6 object-contain"
                    src={product.image}
                    alt="product"
                  />
                  <div className="flex flex-col gap-8 w-full sm:w-4/6">
                    <div className="flex justify-between">
                      <span className="font-semibold sm:font-extrabold w-4/6 sm:w-5/6">
                        {product.title}
                      </span>
                      <span className="text-fuchsia-900 font-extrabold w-2/6 sm:w-1/6 ml-2">
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
                  <div className="flex justify-end sm:justify-start w-full sm:w-1/6 relative">
                    <div className="flex flex-col gap-3 text-xs xl:text-base">
                      <div className="flex gap-3">
                        <span>Quantity:</span>
                        <span className="font-extrabold">
                          {product.quantity}
                        </span>
                      </div>

                      <div>
                        <button
                          onClick={() =>
                            dispatch(decrementQuantity(product.id))
                          }
                          disabled={product.quantity === 1}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className={`w-6 h-6 ${
                              product.quantity === 1
                                ? "stroke-gray-400"
                                : "stroke-fuchsia-900 hover:scale-105"
                            }`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() =>
                            dispatch(incrementQuantity(product.id))
                          }
                        >
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
                      <div className="flex gap-3">
                        <span className="w-1/3">Total price:</span>
                        <span className="font-extrabold w-2/3">
                          $ {product.price * product.quantity}
                        </span>
                      </div>
                    </div>

                    <button
                      className="absolute top-0 right-0"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 lg:w-6 lg:h-6 stroke-gray-400 hover:stroke-fuchsia-900"
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
            <button
              className="flex w-3/12 sm:w-1/12 h-8 justify-center text-sm text-gray-400 hover:text-fuchsia-900"
              onClick={() => dispatch(clearCart())}
            >
              Clear the cart
            </button>
          </div>
          <div className="flex justify-end mt-5">
            <div className="flex flex-col items-end w-full lg:w-1/4 gap-5 border-2 border-gray-100 p-3">
              <h2 className="text-xl font-semibold">Total</h2>
              <div className="text-md flex flex-col items-end gap-3">
                <div className="flex gap-2">
                  <span>Quantity:</span>
                  <div className="font-semibold">{totalQuantity}</div>
                </div>
                <div className="flex gap-2">
                  <span>Price:</span>
                  <div className="font-semibold">$ {totalPrice}</div>
                </div>
              </div>
              <button className="w-36 h-10 text-white bg-black">Buy now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-20 mb-10">
          <img
            className="w-1/2 mb-6"
            src="https://d16py1fyt83ijv.cloudfront.net/vedobi/assets/img/empty-cart.webp"
            alt="emrtyCart"
          />
          <Link
            to={"/"}
            className="w-36 h-10 text-white bg-black flex justify-center items-center"
          >
            Go shopping!
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
