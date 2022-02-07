import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import ProductGrid from "../../components/ProductGrid";

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
    <div className="flex content-center justify-center w-screen    bg-fjpink-100 h-full min-h-screen">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oom6bmf.css"
        ></link>
      </Head>
      <ProductGrid products={products} title={"Shop"} />
    </div>
  );
}
