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
        <Title
          text="
          Handlekurver en tom!
        "
        />
      ) : (
        <div className="grid content-center justify-center font-fancy  gap-5">
          <Title text="Handlekurv" />
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid  gap-10 h-60  py-10 px-10 grid-flow-col rounded-md shadow-md w-fit relative odd:bg-fjpink-100 even:bg-fjblue text-lg"
            >
              <button
                onClick={() => dispatch(removeFromCart(item.cartId))}
                className="absolute top-3 right-3 font-semibold text-2xl"
              >
                x
              </button>

              <Image
                src={item.variants.image}
                alt=""
                width={130}
                height={100}
              />

              <div className="grid  content-center justify-center">
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
          <h2 className="text-center text-3xl">
            Total sum: {getTotalPrice()} kr
          </h2>

          <button onClick={() => createCheckOutSession(cart)}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
