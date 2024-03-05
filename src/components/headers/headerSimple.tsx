import { Link } from "react-router-dom";

const HeaderSimple = () => {
  return (
    <header className="h-12 flex fixed top-0 justify-center items-center w-screen px-5 gap-3 bg-white border-b-2 border-gray-100 z-10">
      <Link
        to={"/"}
        className="uppercase text-xl sm:text-3xl italic font-bold tracking-widest hover:text-fuchsia-800 cursor-pointer"
      >
        Fason
      </Link>
    </header>
  );
};

export default HeaderSimple;
