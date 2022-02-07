import ProductCard from "./ProductCard";
import Title from "./Title";

const ProductGrid = ({ products, title }) => {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  bg-white md:p-20 p-10 ">
      <Title text={title} />
      {products.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </div>
  );
};

export default ProductGrid;
