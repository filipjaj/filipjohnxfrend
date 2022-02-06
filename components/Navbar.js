import Link from "next/link";
import { useSelector } from "react-redux";
const Navbar = () => {
  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className="grid grid-cols-6 px-8 py-7 sticky top-0 left-0 z-50 bg-fjblue shadow-fjbeige shadow-sm">
      <h2 className="font-fancy font-bold text-2xl col-span-5">
        Filip John x Frend
      </h2>
      <div className="flex flex-row gap-5 col-span-1 justify-self-end font-fancy font-medium">
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/shop">
          <a>Shop</a>
        </Link>
        <Link href="/cart">
          <a>Cart ({getItemsCount()})</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
