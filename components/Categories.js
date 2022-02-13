import Image from "next/image";
import Loading from "./Loading";
import { useGetAllProductsQuery } from "../redux/product";
import { useRouter } from "next/router";
import H3 from "./H3";

export default function Categories({ categories }) {
  const router = useRouter();
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <Loading />;
  }

  const findCategoryImage = (id) => {
    const categoryProducts = products.filter((product) =>
      product.categoryId.includes(id)
    );

    return categoryProducts[1]
      ? categoryProducts[1].variants[0].image
      : categoryProducts[0].variants[0].image;
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 w-fit  gap-10  md:h-full h-min content-center m-auto justify-center my-14">
        {categories.map((c) => (
          <div
            className="flex flex-col w-40  h-72 content-center justify-center  "
            key={c.id}
            onClick={() => router.push(`/shop/category/${c.name}`)}
          >
            <H3 className="pb-5 ">{c.name}</H3>
            <div className=" relative  w-40  h-64 ">
              <Image
                layout="fill"
                objectFit="cover"
                alt=""
                src={findCategoryImage(c.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
