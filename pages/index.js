import Head from "next/head";
import Image from "next/image";
import { MdInfoOutline } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import RollingText from "../components/RollingText";

import axios from "axios";
import Title from "../components/Title";
import { useRouter } from "next/router";
import Categories from "../components/Categories";
import H3 from "../components/H3";

export default function Home({ products, categories }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div>
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
              <Categories categories={categories} />
            </div>
          </div>

          <div className=" bg-fjbeige col-span-2 min-h-screen  flex content-center justify-center relative">
            <RollingText text="Filip John x Frend" />

            <div className=" xl:w-2/5 md:w-3/5  w-64  md:h-2/5 h-3/5 overflow-visible relative self-center min-h-fit">
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
                  aria-label="product info"
                />
              </button>
              <div className="absolute -top-20 left-0 z-40 text-3xl text-black font-fancy min-w-content w-full">
                <H3 className=" font-bold w-full"> {products[0].name}</H3>
                <H3>{products[0].price} kr</H3>
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
