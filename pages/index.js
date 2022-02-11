import Head from "next/head";
import Image from "next/image";
import { MdInfoOutline } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addToCart } from ".././redux/cart.slice";
import { useState, useEffect } from "react";
import axios from "axios";
import Title from "../components/Title";
import { useRouter } from "next/router";

export default function Home({ products }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const CartAdd = (product) => {
    dispatch(addToCart(product));
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
            <div className=" p-10 bg-fjpink-100 md:w-full w-screen md:h-2/3 min-h-min content-center justify-center grid">
              <h2 className="font-fancy font-bold text-2xl ">
                {" "}
                Største collaben siden YEEZY
              </h2>
              <p className="font-fancy ">
                Parmesan hard cheese caerphilly. Port-salut parmesan melted
                cheese gouda monterey jack cheese and wine the big cheese
                camembert de normandie. Cheese and biscuits jarlsberg fondue
                hard cheese who moved my cheese babybel cheesy feet rubber
                cheese. Cottage cheese babybel manchego fondue say cheese the
                big cheese boursin cottage cheese. Cheese and wine camembert de
                normandie emmental stinking bishop. Camembert de normandie
                cheese strings boursin. Bocconcini cheesecake cut the cheese
                cream cheese queso port-salut macaroni cheese airedale. St. agur
                blue cheese fromage frais cheese slices swiss monterey jack
                cheese strings cheeseburger cheese and wine. Roquefort cheese
                and biscuits.{" "}
              </p>
            </div>
          </div>

          <div className=" bg-fjbeige col-span-2 min-h-screen  flex content-center justify-center relative">
            <div className="absolute flex flex-col content-center justify-center w-full h-full top-0 left-0">
              <div>
                <Marquee
                  gradient={false}
                  className="font-fancy font-bold text-5xl "
                >
                  <p>
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend
                  </p>
                </Marquee>
              </div>
              <div>
                <Marquee
                  gradient={false}
                  className="font-fancy font-bold text-5xl text-fjpink-200"
                  speed={40}
                >
                  <p>
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend
                  </p>
                </Marquee>
              </div>
              <div>
                <Marquee
                  gradient={false}
                  className="font-fancy font-bold text-5xl "
                >
                  <p>
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend Filip John x Frend Filip John x Frend
                    Filip John x Frend
                  </p>
                </Marquee>
              </div>
            </div>

            <div className=" lg:w-2/5 md:w-3/5  w-64 lg:h-3/5 md:h-2/5 h-2/5 overflow-visible relative self-center">
              <Image
                src={
                  products
                    ? products[0].variants[0].image
                    : "/unisex-crew-neck-sweatshirt-white-front-61fe71c779091.png"
                }
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
                <h2>{products[0].price} kr</h2>
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

  const products = result.data;

  return {
    props: {
      products,
    }, // will be passed to the page component as props
    revalidate: 60,
  };
}
