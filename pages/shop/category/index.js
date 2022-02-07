import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import Title from "../../../components/Title";

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
    <div className="flex content-center justify-center flex-col w-screen h-full mt-64">
      <Title text="Filip John x Frend" />
      <div className="flex flex-col content-center justify-center self-center pt-20 font-fancy text-3xl gap-5">
        {categories.map((c) => (
          <Link href={`/shop/category/${c.name}`} key={c.id}>
            <a className="hover:text-fjpink-200">{c.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryIndex;
