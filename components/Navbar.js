import Link from "next/link";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
const Navbar = () => {
  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

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
    <nav className="grid grid-cols-6 px-8 py-7 sticky top-0 left-0 z-50 bg-fjblue shadow-fjbeige shadow-sm">
      <h2 className="font-fancy font-bold text-2xl col-span-5">
        Filip John x Frend
      </h2>
      <div className="flex flex-row gap-5 col-span-1 justify-self-end font-fancy font-medium ">
        <Link href="/">
          <a>Home</a>
        </Link>
        <div className="relative group">
          <Link href="/shop">
            <a className="hover:text-fjpink-200">Shop</a>
          </Link>
          <div className="absolute grid-flow-row group-hover:visible grid gap-5 pt-10 pb-5 w-32 bg-fjblue content-center justify-center top-5 -left-10 rounded-b-md   invisible -z-10">
            {categories.map((category) => (
              <Link href={`/shop/${category.name}`} key={category.id}>
                <a className=" hover:text-fjpink-200">{category.name}</a>
              </Link>
            ))}
          </div>
        </div>

        <Link href="/cart">
          <a>Cart ({getItemsCount()})</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
