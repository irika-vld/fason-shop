import { IPagination } from "../interfaces/interfaces";

const Pagination = ({
  productsPerPage,
  totalyProducts,
  paginateFn,
  nextPage,
  prevPage,
  currentPage,
}: IPagination) => {
  const pageNumber = [];
  const lastPage = Math.ceil(totalyProducts / productsPerPage);

  for (let i = 1; i <= lastPage; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="flex justify-center items-center mt-6 gap-3">
      <button onClick={prevPage} disabled={currentPage === 1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 rotate-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <ul className="flex gap-3">
        {pageNumber.map((number) => (
          <li
            key={number}
            className={`${
              currentPage === number
                ? "pagination-btn border-none bg-fuchsia-950  text-white "
                : "pagination-btn border border-fuchsia-950  text-fuchsia-950  cursor-pointer hover:scale-95"
            }`}
            onClick={() => paginateFn(number)}
          >
            {number}
          </li>
        ))}
      </ul>
      <button onClick={nextPage} disabled={currentPage === lastPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 -rotate-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
