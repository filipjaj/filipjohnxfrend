import createCheckOutSession from "../services/createCheckoutSession";
import { useSelector } from "react-redux";
import Title from "../components/Title";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Head from "next/head";

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
      <Head>
        <title key="title">Shopping cart</title>
      </Head>
      {cart.length === 0 ? (
        <Title> Your cart is empty! </Title>
      ) : (
        <div className="bg-white">
          <div className="grid content-center justify-center font-fancy  gap-5 bg-white z-20 px-5 w-full ">
            <Title className="pb-10"> Shopping cart </Title>
            {cart.map((item) => (
              <CartItem key={item.cartId} item={item} />
            ))}
            <div className="w-full grid content-center justify-center gap-5 ">
              <h2 className="text-center text-3xl">
                Total: {getTotalPrice()} kr
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
