import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { MdOutlineShoppingBasket } from "react-icons/md";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import { useGetProductByIdQuery } from "../../services/product";

export default function ProductPage({ id }) {
  const { data, error, isLoading } = useGetProductByIdQuery(id);

  const product = data;
  const dispatch = useDispatch();
  const [variant, setVariant] = useState(null);
  console.log(product);

  const handleAddToCart = (product) => {
    let newProduct = {
      ...product,
      variants: variant,
      id: product.id.toString() + variant.id.toString(),
    };
    dispatch(addToCart(newProduct));
  };
  useEffect(() => {
    if (data) {
      setVariant(product.variants[0]);
    }
  }, [isLoading]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  console.log(variant);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oom6bmf.css"
        ></link>
      </Head>
      <div className="w-screen h-full flex content-center justify-center flex-col relative min-h-screen overflow-hidden">
        <div className="w-1/12 bg-fjpink-100 h-full absolute top-0 left-0 z-10"></div>
        <div className="grid h-full w-screen grid-flow-row  justify-center md:grid-cols-5  z-20">
          <div className="md:col-span-2 m-20 flex md:flex-col flex-col content-center justify-center">
            <h1 className=" font-fancy font-bold text-5xl m-10">
              {" "}
              {product.name}
            </h1>
            {}
            <div className="md:w-full w-72  h-auto overflow-visible self-center">
              <Image
                src={variant ? variant.image : product.variants[0].image}
                width={760}
                height={1000}
                alt=""
                className="shadow-lg"
              />
            </div>
          </div>

          <div className="md:col-span-3 grid content-center justify-center md:py-auto py-10 px-20 bg-fjbeige md:min-h-screen h-full ">
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
              className="text-xl font-medium mt-6 bg-fjblue justify-self-center md:justify-self-start  w-44  p-3 rounded-lg flex flex-row"
              onClick={() => handleAddToCart(product)}
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
  console.log(id);

  return {
    props: {
      id,
    }, // will be passed to the page component as props
  };
}
