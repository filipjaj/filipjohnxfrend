import Image from "next/image";
import createCheckOutSession from "../services/createCheckoutSession";
// Importing hooks from react-redux
import { useSelector, useDispatch } from "react-redux";
import Title from "../components/Title";

import Button from "../components/Button";
import { useRouter } from "next/router";
import RollingText from "../components/RollingText";
import CartItem from "../components/CartItem";

const CartPage = () => {
  // Extracting cart state from redux store
  const cart = useSelector((state) => state.cart);

  // Reference to the dispatch function from redux store

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
          <div className="grid content-center justify-center font-fancy  gap-5 bg-white z-20 px-5 w-full ">
            <Title className="pb-10"> Handlekurv </Title>
            {cart.map((item) => (
              <CartItem key={item.cartId} item={item} />
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
