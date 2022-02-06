import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Category({ products, category }) {
  return (
    <div className="flex content-center justify-center w-screen  bg-fjbeige h-full min-h-screen">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oom6bmf.css"
        ></link>
      </Head>
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  bg-white p-20">
        <h1 className=" font-fancy font-bold text-5xl "> {category.name}</h1>
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

            <Link
              className="text-white bg-black p-2 w-32 rounded-md self-center font-fancy font-normal "
              href={`${category.name}/${product.id}`}
            >
              <a>Kjøp nå!</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const categoryParam = context.params.category;

  const productResult = await axios(
    `https://frend-ecom-api.azurewebsites.net/Product`
  );
  const categoriesResult = await axios(
    `https://frend-ecom-api.azurewebsites.net/Category`
  );

  const category = categoriesResult.data.find(
    (category) => category.name === categoryParam
  );

  const products = productResult.data.filter((product) =>
    product.categoryId.includes(category.id)
  );
  console.log(products);

  return {
    props: {
      products,
      category,
    }, // will be passed to the page component as props
  };
}
