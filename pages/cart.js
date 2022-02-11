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

const CartPage = () => {
  // Extracting cart state from redux store
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  // Reference to the dispatch function from redux store
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className=" mt-20 h-full min-h-screen">
      {cart.length === 0 ? (
        <Title> Handlekurver en tom! </Title>
      ) : (
        <>
          <Title className="pb-10"> Handlekurv </Title>
          <div className="grid content-center justify-center font-fancy  gap-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid group  gap-10 min-h-60 h-fit  py-10 px-10 grid-flow-col rounded-md shadow-md w-fit relative "
              >
                <div className="group-even:bg-fjpink-200 group-odd:bg-fjblue w-14 absolute top-0 left-0 h-full"></div>
                <div className="bg-fjbeige w-7/12 absolute top-0 right-0 h-full z-10"></div>
                <button
                  onClick={() => dispatch(removeFromCart(item.cartId))}
                  className="absolute top-3 right-3 font-semibold text-2xl z-30"
                >
                  x
                </button>
                <div className="w-fit h-fit self-center z-30">
                  <Image
                    src={item.variants.image}
                    alt=""
                    width={152}
                    height={200}
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
        </>
      )}
    </div>
  );
};

export default CartPage;
