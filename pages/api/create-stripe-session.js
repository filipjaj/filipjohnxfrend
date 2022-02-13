const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { items } = req.body;
  const result = await fetch(
    "https://frend-ecom-api.azurewebsites.net/Product"
  );
  const products = await result.json();
  const new_items = items.map((item) => {
    const serverPrice = products.find((product) => product.id == item.id);
    return {
      quantity: item.quantity,
      description: item.description,
      price_data: {
        ...item.price_data,
        unit_amount: serverPrice.price * 100,
      },
    };
  });

  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://frend.vercel.app";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: new_items,
    mode: "payment",
    success_url: redirectURL + "?status=success",
    cancel_url: redirectURL + "?status=cancel",
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
