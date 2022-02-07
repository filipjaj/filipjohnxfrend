import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="flex  content-center justify-center w-64 h-96   flex-col  "
    >
      <div className="w-64 h-80 relative overflow-hidden top-0 left-0 pb-5 rounded-md">
        <Image
          src={product.variants[0].image}
          layout="fill"
          alt=""
          objectFit="cover"
          className="z-10"
        />
      </div>
      <p className="text-center font-fancy text-xl font-bold z-20">
        {product.name}{" "}
      </p>
      <p className="text-center font-fancy text-lg  z-20">{product.price} kr</p>

      <Link href={`/shop/${product.id}`}>
        <a className="text-white bg-black p-2 w-32 rounded-md self-center font-fancy font-normal text-center">
          Kjøp nå!
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
