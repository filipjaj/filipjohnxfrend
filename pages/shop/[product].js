import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlineShoppingBasket } from "react-icons/md";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import { useGetProductByIdQuery } from "../../redux/product";
import Loading from "../../components/Loading";
import getStock from "../../services/getStock";

export default function ProductPage({ id }) {
  const cart = useSelector((state) => state.cart);
  const { data: product, refetch } = useGetProductByIdQuery(id);
  console.log(product);
  const [animate, setAnimate] = useState(false);
  const [imageFallback, setImageFallback] = useState(false);

  const dispatch = useDispatch();
  const [variant, setVariant] = useState(null);

  const handleAddToCart = (product) => {
    refetch();
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

  const handleVariantChange = (variant) => {
    setVariant(variant);
    setImageFallback(false);
  };

  useEffect(() => {
    if (product) {
      setVariant(product.variants[0]);
    }
  }, [product]);

  if (!product) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title key="title">{product.name}</title>
      </Head>
      <div className="w-screen h-full flex content-center justify-center flex-col relative min-h-screen overflow-hidden">
        <div className="w-1/12 bg-fjpink-100 h-full absolute top-0 left-0 z-10"></div>
        <div className="grid h-full w-screen grid-flow-row  justify-center md:grid-cols-5  z-20">
          <div className="md:col-span-2 md:m-20 m-auto flex md:flex-col flex-col content-center justify-center ">
            <h1 className=" font-fancy font-bold text-5xl md:mb-16 my-6 ">
              {product.name}
            </h1>
            {}
            <div className="md:w-full w-72  h-auto overflow-visible self-center">
              <Image
                src={
                  imageFallback
                    ? "/bilde mangler.png"
                    : variant
                    ? variant.image
                    : "/bilde mangler.png"
                }
                width={760}
                height={1000}
                alt=""
                onError={() => setImageFallback(true)}
                className="shadow-lg"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89OjBfwAI9wOlwldnxgAAAABJRU5ErkJggg=="
              />
            </div>
          </div>

          <div className="md:col-span-3 grid content-center justify-center md:py-auto py-10 px-20 bg-fjbeige md:min-h-screen h-full ">
            <button
              className="text-xl font-medium order-first md:order-last md:mt-6  bg-fjblue justify-self-center md:justify-self-start  w-44  p-3 rounded-lg flex flex-row disabled:bg-gray-300 disabled:text-gray-200 disabled:cursor-not-allowed "
              onClick={() => handleAddToCart(product)}
              disabled={getStock(variant, product, cart) == "Sold Out"}
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
                  key={v.id}
                >
                  <button
                    onClick={() => handleVariantChange(v)}
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
                    {getStock(v, product, cart)}
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
