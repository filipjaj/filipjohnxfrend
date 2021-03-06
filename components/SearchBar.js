import { MdSearch } from "react-icons/md";

const SearchBar = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="z-20 flex content-center justify-center mt-5">
      <label
        htmlFor="search"
        className="w-min font-bold md:text-xl text-lg self-center pr-4"
      >
        <MdSearch className=" bg-fjblue p-1 w-10 h-10 rounded-full self-center" />
      </label>
      <input
        type="search"
        value={search}
        onChange={handleSearch}
        placeholder={"Search for product"}
        className=" px-3 w-52 h-14 text-lg md:text-xl rounded-md border-2 border-fjblue"
      />
    </div>
  );
};

export default SearchBar;
