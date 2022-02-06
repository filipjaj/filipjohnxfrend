import Head from "next/head";
import Image from "next/image";
import { MdOutlineShoppingBasket } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addToCart } from ".././redux/cart.slice";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function fetchProducts() {
      const result = await axios(
        "https://frend-ecom-api.azurewebsites.net/Product"
      );
      setProducts(result.data);
      console.log(result.data);
    }
    fetchProducts();
  }, []);

  const dispatch = useDispatch();

  const CartAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Head>
        <title>Filip John x Frend</title>
        <meta name="description" content="Stærste samarbeidet siden YEEZY" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oom6bmf.css"
        ></link>
      </Head>
      <div className="w-screen h-full overflow-hidden">
        <div className="grid content-center justify-center grid-cols-5 ">
          <div className="flex flex-col col-span-3 content-center justify-center">
            <div className="w-full h-2/3 content-center justify-center grid">
              <h1 className=" font-fancy font-bold text-5xl ">
                Filip John x Frend
              </h1>
            </div>
            <div className=" p-10 bg-fjpink-200 w-full h-1/3 content-center justify-center grid">
              <h2 className="font-fancy font-bold text-2xl">
                {" "}
                Største collaben siden YEEZY
              </h2>
              <p className="">
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
            <div className=" w-2/5 h-3/5 overflow-visible relative self-center">
              <Image
                src={
                  products
                    ? products[0].variants[0].image
                    : "/unisex-crew-neck-sweatshirt-white-front-61fe71c779091.png"
                }
                layout="fill"
                objectFit="cover"
                alt="man with sweater"
                className="z-20"
              />
              <button
                id="CartIcon"
                className=" w-32 h-32 bg-fjblue rounded-full absolute -bottom-10 -right-10 shadow-md z-30 flex content-center justify-center"
              >
                <MdOutlineShoppingBasket
                  className=" w-20 h-20 self-center hover:text-fjpink-200"
                  onClick={() => CartAdd(products[0])}
                />
              </button>
              <div className=" bg-fjgreen rounded-lg z-10 absolute bottom-0 h-3/4 w-full shadow-lg "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
