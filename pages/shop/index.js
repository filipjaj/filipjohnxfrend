import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";

export default function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const result = await axios(
        "https://frend-ecom-api.azurewebsites.net/Product"
      );
      setProducts(result.data);
    }
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oom6bmf.css"
        ></link>
      </Head>
      <div className="grid grid-cols-3 gap-10 m-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex  content-center justify-center w-64 h-96   flex-col  "
          >
            <div className="w-64 h-80 relative overflow-hidden top-0 left-0 pb-5 rounded-md">
              <Image
                src={product.variants[0].image}
                layout="fill"
                alt=""
                objectFit="cover"
                className="z-10"
              />
            </div>
            <p className="text-center font-fancy text-xl font-bold z-20">
              {product.name}{" "}
            </p>
            <p className="text-center font-fancy text-lg  z-20">
              {product.price} kr
            </p>

            <button className="text-white bg-black p-2 w-32 rounded-md self-center font-fancy font-normal ">
              {" "}
              Kjøp nå!{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
