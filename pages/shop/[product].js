import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { MdOutlineShoppingBasket } from "react-icons/md";
import Head from "next/head";

const Cart = ({ cartItems, setCartItems }) => {
  console.log(cartItems);
  return <div></div>;
};

export default function Home({ product }) {
  const [variant, setVariant] = useState(product.variants[0]);
  const [cartItems, setCartItems] = useState([]);
  console.log(product);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oom6bmf.css"
        ></link>
      </Head>
      <div className="w-screen h-full flex content-center justify-center flex-col relative">
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
        <div className="w-1/12 bg-fjpink-100 h-screen absolute top-0 left-0 z-10"></div>
        <div className="grid content-center justify-center grid-cols-5  z-20">
          <div className="col-span-2 m-10 flex flex-col content-center justify-center">
            <h1 className=" font-fancy font-bold text-5xl m-10">
              {" "}
              {product.name}
            </h1>
            {}
            <div className="w-full h-auto overflow-visible ">
              <Image
                src={variant ? variant.image : product.variants[0].image}
                width={760}
                height={1000}
                alt=""
                className="shadow-lg"
              />
            </div>
          </div>

          <div className="col-span-3 grid content-center justify-center px-20 bg-fjbeige min-h-screen h-full ">
            <div className="grid grid-flow-col gap-10 content-start justify-start my-7">
              <p className="font-fancy text-lg italic font-medium">
                Varianter:
              </p>
              {product.variants.map((v) => (
                <button
                  onClick={() => setVariant(v)}
                  key={v.name}
                  className={
                    "font-fancy rounded-md  text-lg " +
                    (variant
                      ? v.name === variant.name
                        ? "font-bold"
                        : ""
                      : "")
                  }
                >
                  {v.name}
                </button>
              ))}
            </div>
            <p className="font-fancy text-lg">{product.description}</p>
            <p className="text-3xl font-light mt-10">{product.price} kr</p>
            <button
              className="text-xl font-medium mt-6 bg-fjblue  w-44  p-3 rounded-lg flex flex-row"
              onClick={() => setCartItems(cartItems.concat(product))}
            >
              <MdOutlineShoppingBasket className="w-7 h-7 mr-3" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.product;

  const result = await axios(
    `https://frend-ecom-api.azurewebsites.net/Product/${id}`
  );
  console.log(context.params, result.data);
  const product = result.data;

  return {
    props: {
      product,
    }, // will be passed to the page component as props
  };
}
