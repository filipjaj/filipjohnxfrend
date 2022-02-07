import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ProductGrid from "../../../components/ProductGrid";

export default function Category({ products, category }) {
  return (
    <div className="flex content-center justify-center w-screen  bg-fjbeige h-full min-h-screen">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oom6bmf.css"
        ></link>
      </Head>
      <ProductGrid products={products} title={category.name} />
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
