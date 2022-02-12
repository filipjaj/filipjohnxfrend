import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { MdOutlineShoppingBasket } from "react-icons/md";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import { useGetProductByIdQuery } from "../../redux/product";
import Loading from "../../components/Loading";

export default function ProductPage({ id }) {
  const cart = useSelector((state) => state.cart);
  const { data, error, isLoading } = useGetProductByIdQuery(id);
  const [animate, setAnimate] = useState(false);

  const product = data;
  const dispatch = useDispatch();
  const [variant, setVariant] = useState(null);

  const variantStock = (v, product) => {
    if (!v) {
      return "Lagerstatus ukjent";
    }

    const cartItem = cart.find(
      (item) => item.cartId === product.id.toString() + v.id.toString()
    );

    return cartItem
      ? cartItem.variants.stock > 0
        ? cartItem.variants.stock
        : "Utsolgt"
      : v
      ? v.stock > 0
        ? v.stock
        : "Utsolgt"
      : "Lagerstatus ukjent";
  };

  const handleAddToCart = (product) => {
    let newProduct = {
      ...product,
      variants: variant,
      cartId: product.id.toString() + variant.id.toString(),
    };
    dispatch(addToCart(newProduct));
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 600);
  };
  useEffect(() => {
    if (data) {
      setVariant(product.variants[0]);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

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
          <div className="md:col-span-2 md:m-20 m-auto flex md:flex-col flex-col content-center justify-center ">
            <h1 className=" font-fancy font-bold text-5xl md:mb-16 my-6 ">
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
                prefetch
              />
            </div>
          </div>

          <div className="md:col-span-3 grid content-center justify-center md:py-auto py-10 px-20 bg-fjbeige md:min-h-screen h-full ">
            <button
              className="text-xl font-medium order-first md:order-last md:mt-6  bg-fjblue justify-self-center md:justify-self-start  w-44  p-3 rounded-lg flex flex-row disabled:bg-gray-300 disabled:text-gray-200 disabled:cursor-not-allowed "
              onClick={() => handleAddToCart(product)}
              disabled={variantStock(variant, product) == "Utsolgt"}
            >
              <MdOutlineShoppingBasket
                className={
                  "w-7 h-7 mr-3 " +
                  (animate
                    ? " md:animate-sendtocart animate-mobilecart bg-fjblue text-black rounded-full"
                    : "")
                }
              />
              Add to Cart
            </button>

            <div className="grid grid-flow-col gap-10 content-start justify-start my-7">
              <p className="font-fancy text-lg italic font-medium">
                Varianter:
              </p>
              {product.variants.map((v) => (
                <div
                  className="grid grid-flow-row justify-center content-center"
                  key={v.name}
                >
                  <button
                    onClick={() => setVariant(v)}
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
                  <p className="text-sm text-center">
                    {variantStock(v, product)}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-fancy text-lg">{product.description}</p>
            <p className="text-3xl font-light mt-10">{product.price} kr</p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.product;

  return {
    props: {
      id,
    }, // will be passed to the page component as props
  };
}
