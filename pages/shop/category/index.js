import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import Title from "../../../components/Title";
import Categories from "../../../components/Categories";

const CategoryIndex = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const result = await axios(
        "https://frend-ecom-api.azurewebsites.net/Category"
      );
      setCategories(result.data);
    }
    fetchCategories();
  }, []);

  return (
    <div className="grid content-center justify-center  w-screen h-screen ">
      <Title>Kategorier</Title>
      <Categories categories={categories} />
    </div>
  );
};

export default CategoryIndex;
