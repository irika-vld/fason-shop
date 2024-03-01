interface Props {
  setSearchValue: (x: string) => void;
  searchValue: string;
}

const Search = ({ setSearchValue, searchValue }: Props) => {
  return (
    <div className="flex flex-col h-10 justify-center items-center">
      <div className="w-4/5 sm:w-1/2">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-4/5 h-8 p-2 bg-gray-100 text-xs sm:text-sm focus:outline-gray-200"
        />
        <button className="w-1/5 h-8 bg-gray-200 text-xs sm:text-sm">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
