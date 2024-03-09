import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../services/productsService";
import { Grid } from "react-loader-spinner";
import { useAppSelector } from "../hooks/redux";

interface Props {
  setIsSignInOpen: (x: boolean) => void;
}

const Menu = ({ setIsSignInOpen }: Props) => {
  const { data, isLoading } = useGetCategoriesQuery(null);

const user = useAppSelector((state) => state.user.user)

  return (
    <div className="fixed top-10 h-full w-3/5 text-sm sm:w-1/3 xl:w-full xl:static sm:text-base border border-gray-200 bg-fuchsia-50 ">
      {user && (
        <div className="mx-3 mt-4 text-sm font-semibold">
          Hello, {user.userName}
        </div>
      )}

      <span className="flex font-semibold text-2xl justify-end mb-6 p-2">
        Menu
      </span>
      <div>
        <ul>
          {isLoading && (
            <Grid
              visible={true}
              height="20"
              width="20"
              color="#c213b9"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass="flex justify-center"
            />
          )}
          {data?.map((category) => (
            <Link
              to={`/categories/${category}`}
              key={category}
              className="menu-li"
            >
              {category}
            </Link>
          ))}
        </ul>
        <div className="flex flex-col">
          <Link to={"/sale"}>
            <span className="menu-li text-red-800 font-semibold">Sale</span>
          </Link>
          <Link to={"/brands"}>
            <span className="menu-li">Brands</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col bg-orange-100">
        <div className="menu-li">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <span onClick={() => setIsSignInOpen(true)}>Sign in / register</span>
        </div>
        <Link to={"/customer_service"}>
          <span className="menu-li">Promotions and discounts</span>
        </Link>
        <Link to={"/customer_service"}>
          <span className="menu-li">Delivery</span>
        </Link>
        <div className="h-10 border-b border-b-gray-200 flex items-center pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>

          <span>0 000 000 00 00</span>
        </div>
        <span className="h-10 border-b border-b-gray-200 flex items-center pl-2">
          shopfason@fas.on
        </span>
      </div>
    </div>
  );
};

export default Menu;
