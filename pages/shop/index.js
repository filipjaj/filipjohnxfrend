import Head from "next/head";
import ProductGrid from "../../components/ProductGrid";
import { useGetAllProductsQuery } from "../../redux/product";
import Loading from "../../components/Loading";
import RollingText from "../../components/RollingText";

export default function Shop() {
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex content-center justify-center w-screen    bg-fjpink-100 h-full min-h-screen ">
      <Head>
        <title key="title">Shop</title>
      </Head>

      <ProductGrid data={data} title={"Shop"} />
      <RollingText text="Shop" />
    </div>
  );
}
