import Image from "next/image";
// Importing hooks from react-redux
import { useSelector, useDispatch } from "react-redux";
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
    <div className="">
      {cart.length === 0 ? (
        <h1 className="text-6xl font-bold m-auto text-center mt-64">
          Your Cart is Empty!
        </h1>
      ) : (
        <div className="grid content-center justify-center font-fancy">
          <h1 className="text-2xl font-bold">Handlekurv</h1>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex p-10 flex-col rounded-md shadow-md"
            >
              <p>{item.name}</p>
              <p>{item.price} kr</p>
              <p>{item.quantity}</p>
              <p>{item.variants.name}</p>
              <div className="font-bold text-2xl">
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>Totalt {item.quantity * item.price} kr</p>
            </div>
          ))}
          <h2>Total sum: {getTotalPrice()} kr</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
