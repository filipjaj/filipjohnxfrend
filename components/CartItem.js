import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import { useRouter } from "next/router";
import getStock from "../services/getStock";

export default function CartItem({ item }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div
      key={item.cartId}
      className="grid group  gap-10 min-h-60 h-fit  py-10 px-10 grid-flow-col rounded-md shadow-md  w-80 relative bg-white "
    >
      <div className="group-even:bg-fjpink-200 group-odd:bg-fjblue w-14 absolute top-0 left-0 h-full"></div>
      <div className="bg-fjbeige w-7/12 absolute top-0 right-0 h-full z-20"></div>
      <button
        onClick={() => dispatch(removeFromCart(item.cartId))}
        className="absolute top-3 right-3 font-semibold text-2xl z-30"
      >
        x
      </button>
      <div
        className=" w-32 h-44 self-center relative overflow-hidden z-30"
        onClick={() => router.push(`/shop/${item.id}`)}
      >
        <Image
          src={item.variants.image}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="grid  content-center justify-center z-30">
        <p
          className="font-bold text-2xl"
          onClick={() => router.push(`/shop/${item.id}`)}
        >
          {item.name}
        </p>
        <div className="grid grid-cols-3">
          <button
            onClick={() => dispatch(decrementQuantity(item.cartId))}
            className="font-semibold text-2xl"
          >
            -
          </button>
          <p className="text-center  text-2xl">{item.quantity}</p>
          <button
            onClick={() => dispatch(incrementQuantity(item.cartId))}
            className="font-semibold text-2xl  disabled:text-gray-300 disabled:cursor-not-allowed"
            disabled={getStock(item.variants, item, cart) == "Utsolgt"}
          >
            +
          </button>
        </div>
        <p className="italic">{item.variants.name}</p>

        <div className="font-bold text-2xl"></div>
        <p>{item.quantity * item.price} kr</p>
      </div>
    </div>
  );
}
