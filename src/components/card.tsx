import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  detailsIsOpenHandler: (id: number) => void
}

const Card = ({
  id,
  title,
  price,
  image,
  category,
  detailsIsOpenHandler,
}: Props) => {

  return (
    <div className="flex flex-col h-full max-h-96 md:max-h-[32rem] min-h-56 w-full min-w-28 max-w-xs mb-2 border border-fuchsia-50 relative">
      <Link to={`/product/${id}`}>
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

      <button>
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
    </div>
  );
};

export default Card;
