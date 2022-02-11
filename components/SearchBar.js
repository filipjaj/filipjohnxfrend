import { MdSearch } from "react-icons/md";

const SearchBar = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="z-20 flex content-center justify-center mt-5">
      <input
        type="search"
        value={search}
        onChange={handleSearch}
        placeholder={"Søk etter produkt"}
        className=" px-3 w-52 h-14 text-lg md:text-xl rounded-md border-2 border-fjblue"
      />
      <label
        htmlFor="search"
        className="w-min font-bold md:text-xl text-lg self-center pl-4"
      >
        <MdSearch className=" bg-fjblue p-1 w-10 h-10 rounded-full self-center" />
      </label>
    </div>
  );
};

export default SearchBar;
