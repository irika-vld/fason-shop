import { useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";

interface Props {
  setSearchValue: (x: string) => void;
}

const Search = ({ setSearchValue }: Props) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInputHandler = () => {
    setSearchValue("");
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 200),
    []
  );

  const changeInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className="flex flex-col h-10 justify-center items-center">
      <div className="w-4/5 sm:w-1/2 relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={value}
          onChange={changeInputHandler}
          className="w-4/5 sm:w-10/12 lg:w-4/5 h-8 p-2 bg-gray-100 text-xs sm:text-sm focus:outline-gray-200"
        />
        {value ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 absolute top-1 right-5 lg:right-7 xl:right-14 hover:stroke-fuchsia-800"
            onClick={clearInputHandler}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 absolute top-1 right-5 lg:right-7 xl:right-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Search;
