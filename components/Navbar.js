import Link from "next/link";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdMenu } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
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
    setMenu(false);
  }, []);

  return (
    <nav className="grid grid-cols-6 md:px-8 md:py-7 sticky top-0 left-0 z-50 bg-fjblue shadow-fjbeige  shadow-sm justify-center  w-screen ">
      <h2 className="font-fancy font-bold text-2xl col-span-5 justify-self-start  px-3 self-center">
        Filip John x Frend
      </h2>
      <MdMenu
        className={
          "w-20 h-20 z-50  flex md:hidden col-span-1 pr-5 " +
          (!menu ? " flex " : " hidden ")
        }
        onClick={() => setMenu(!menu)}
      />
      <MdOutlineCancel
        className={
          "w-20 h-20 z-50  flex md:hidden col-span-1 pr-5 " +
          (menu ? " flex " : " hidden ")
        }
        onClick={() => setMenu(!menu)}
      />

      <div
        className={
          "md:flex md:flex-row  grid grid-flow-row gap-5 col-span-1 justify-self-end font-fancy font-medium md:static absolute md:h-fit right-0 top-20 h-screen md:bg-transparent bg-fjpink-100 px-10" +
          (menu ? " flex  absolute" : " hidden ")
        }
      >
        <div className="grid md:flex h-min mt-20 gap-7 content-center md:m-auto  ">
          <Link href="/">
            <a className="md:hover:text-fjpink-200 font-bold text-2xl md:text-lg">
              Home
            </a>
          </Link>
          <Link href="/cart">
            <a className="md:hover:text-fjpink-200 font-bold text-2xl md:text-lg">
              {" "}
              Cart ({getItemsCount()})
            </a>
          </Link>
          <div className="relative group">
            <Link href="/shop">
              <a className="md:hover:text-fjpink-200 font-bold text-2xl md:text-lg">
                Shop
              </a>
            </Link>
            <div className="md:absolute grid-flow-row md:group-hover:visible grid md:gap-5 md:pt-10 md:pb-5 md:w-32 md:bg-fjblue pl-1 md:content-center md:justify-center md:top-5 md:-left-10 md:rounded-b-md   md:invisible md:-z-10">
              {categories.map((category) => (
                <Link
                  href={`/shop/category/${category.name}`}
                  key={category.id}
                >
                  <a className=" hover:text-fjpink-200">{category.name}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
