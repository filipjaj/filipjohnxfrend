import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <div
      key={product.id}
      className="flex  content-center justify-center w-64 h-96   flex-col  "
      onClick={() => router.push(`/shop/${product.id}`)}
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
    </div>
  );
};

export default ProductCard;
