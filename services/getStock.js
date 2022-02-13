const getStock = (v, product, cart) => {
  if (!v) {
    return "Stock Unknown";
  }

  const cartItem = cart.find(
    (item) => item.cartId === product.id.toString() + v.id.toString()
  );

  return cartItem
    ? cartItem.variants.stock > 0
      ? cartItem.variants.stock
      : "Sold Out"
    : v
    ? v.stock > 0
      ? v.stock
      : "Sold Out"
    : "Stock Unknown";
};

export default getStock;
