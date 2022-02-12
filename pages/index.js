import Head from "next/head";
import Image from "next/image";
import { MdInfoOutline } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import RollingText from "../components/RollingText";

import axios from "axios";
import Title from "../components/Title";
import { useRouter } from "next/router";

export default function Home({ products, categories }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const findCategoryImage = (id) => {
    const categoryProducts = products.filter((product) =>
      product.categoryId.includes(id)
    );

    return categoryProducts[1]
      ? categoryProducts[1].variants[0].image
      : categoryProducts[0].variants[0].image;
  };

  return (
    <div>
      <Head>
        <title>Filip John x Frend</title>
        <meta name="description" content="Største samarbeidet siden YEEZY" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oom6bmf.css"
        ></link>
      </Head>
      <div className="w-screen h-full overflow-hidden">
        <div className="grid content-center justify-center md:grid-cols-5 ">
          <div className="flex flex-col md:col-span-3 content-center justify-center">
            <div className="w-full md:h-1/3 h-64 content-center justify-center grid">
              <Title> Filip John x Frend </Title>
            </div>
            <div className=" py-32 pb-40 bg-fjpink-100 md:w-full w-screen md:h-2/3 min-h-max content-center justify-center  flex flex-col overflow-visible">
              <h2 className="font-bold text-3xl text-black font-fancy  py-12 h-fit text-center self-center">
                Kategorier
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 w-fit  gap-10  md:h-full h-min content-center m-auto justify-center my-14">
                {categories.map((c) => (
                  <div
                    className="flex flex-col w-40  h-72 content-center justify-center  "
                    key={c.id}
                    onClick={() => router.push(`/shop/category/${c.name}`)}
                  >
                    <h3 className="text-3xl text-black font-fancy pb-5 ">
                      {c.name}
                    </h3>
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
            </div>
          </div>

          <div className=" bg-fjbeige col-span-2 min-h-screen  flex content-center justify-center relative">
            <RollingText text="Filip John x Frend" />

            <div className=" lg:w-2/5 md:w-3/5  w-64 lg:h-3/5 md:h-2/5 h-2/5 overflow-visible relative self-center">
              <Image
                src={
                  products
                    ? products[0].variants[0].image
                    : "/unisex-crew-neck-sweatshirt-white-front-61fe71c779091.png"
                }
                priority={true}
                layout="fill"
                objectFit="cover"
                alt=""
                className="z-20 "
              />
              <button
                id="CartIcon"
                className=" w-32 h-32 bg-fjblue rounded-full absolute -bottom-10 -right-10 shadow-md z-30 flex content-center justify-center"
              >
                <MdInfoOutline
                  className=" w-20 h-20 self-center hover:text-fjpink-200"
                  onClick={() => router.push(`/shop/${products[0].id}`)}
                />
              </button>
              <div className="absolute -top-20 left-0 z-40 text-3xl text-black font-fancy">
                <h2 className=" font-bold "> {products[0].name}</h2>
                <h3>{products[0].price} kr</h3>
              </div>
              <div className=" bg-fjgreen rounded-lg z-10 absolute bottom-0 h-3/4 w-full shadow-lg "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const result = await axios(
    "https://frend-ecom-api.azurewebsites.net/Product"
  );

  const categoryResult = await axios(
    "https://frend-ecom-api.azurewebsites.net/Category"
  );

  const products = result.data;
  const categories = categoryResult.data;

  return {
    props: {
      products,
      categories,
    }, // will be passed to the page component as props
    revalidate: 60,
  };
}
