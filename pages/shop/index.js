import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import ProductGrid from "../../components/ProductGrid";
import { useGetAllProductsQuery } from "../../redux/product";
import Loading from "../../components/Loading";

export default function Shop() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex content-center justify-center w-screen    bg-fjpink-100 h-full min-h-screen">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oom6bmf.css"
        ></link>
      </Head>

      <ProductGrid data={data} title={"Shop"} />
    </div>
  );
}
