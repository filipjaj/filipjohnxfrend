import Image from "next/image";
import createCheckOutSession from "../services/createCheckoutSession";
// Importing hooks from react-redux
import { useSelector, useDispatch } from "react-redux";
import Title from "../components/Title";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import Button from "../components/Button";
import { useRouter } from "next/router";
import RollingText from "../components/RollingText";

const CartPage = () => {
  // Extracting cart state from redux store
  const cart = useSelector((state) => state.cart);

  const router = useRouter();

  // Reference to the dispatch function from redux store
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  if (process.env.NODE_ENV !== "production") {
    console.log(cart);
  }

  return (
    <div className="  h-full min-h-screen py-10">
      {cart.length === 0 ? (
        <Title> Handlekurver en tom! </Title>
      ) : (
        <div className="bg-white">
          <RollingText text="Handlekurv" />

          <div className="grid content-center justify-center font-fancy  gap-5 bg-white z-20 px-5 w-full ">
            <Title className="pb-10"> Handlekurv </Title>
            {cart.map((item) => (
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
                  <p className="font-bold text-2xl">{item.name}</p>
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
                      className="font-semibold text-2xl"
                    >
                      +
                    </button>
                  </div>
                  <p className="italic">{item.variants.name}</p>

                  <div className="font-bold text-2xl"></div>
                  <p>{item.quantity * item.price} kr</p>
                </div>
              </div>
            ))}
            <div className="w-full grid content-center justify-center gap-5 ">
              <h2 className="text-center text-3xl">
                Total sum: {getTotalPrice()} kr
              </h2>

              <Button onClick={() => createCheckOutSession(cart)}>
                Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
