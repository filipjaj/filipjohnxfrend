import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ProductGrid from "../../../components/ProductGrid";
import { useGetAllProductsQuery } from "../../../redux/product";
import Loading from "../../../components/Loading";
import RollingText from "../../../components/RollingText";

export default function Category({ category }) {
  let { data, error, isLoading } = useGetAllProductsQuery(); //RTK Query

  if (isLoading) {
    return <Loading />;
  }

  const products = data.filter((product) =>
    product.categoryId.includes(category.id)
  );

  return (
    <div className="flex content-center justify-center w-screen  bg-fjbeige h-full min-h-screen">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oom6bmf.css"
        ></link>
      </Head>
      <ProductGrid data={products} title={category.name} />
      <RollingText text={category.name} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const categoryName = context.params.category;

  const result = await axios.get(
    "https://frend-ecom-api.azurewebsites.net/Category"
  );

  const data = await result.data;

  const category = await data.find(
    (category) => category.name === categoryName
  );
  return {
    props: {
      category,
    }, // will be passed to the page component as props
  };
}
