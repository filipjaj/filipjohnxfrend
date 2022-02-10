import ProductCard from "./ProductCard";
import Title from "./Title";
import SearchBar from "./SearchBar";
import { searchResults } from "../services/searchResults";
import { useState } from "react";

const ProductGrid = ({ data, title }) => {
  const [search, setSearch] = useState("");
  const products = searchResults(data, search);
  console.log(products);

  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  bg-white md:p-20 p-10 ">
      <div>
        <Title text={title} />
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      {products.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </div>
  );
};

export default ProductGrid;
