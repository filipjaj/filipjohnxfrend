import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey);

const createCheckOutSession = async (items) => {
  const cart = items.map((item) => {
    return {
      price_data: {
        currency: "nok",
        product_data: {
          images: [item.variants.image],
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
      description: item.description,
    };
  });

  const stripe = await stripePromise;
  const checkoutSession = await axios.post("/api/create-stripe-session", {
    items: cart,
  });
  const result = await stripe.redirectToCheckout({
    sessionId: checkoutSession.data.id,
  });
  if (result.error) {
    alert(result.error.message);
  }
};

export default createCheckOutSession;
