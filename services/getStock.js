const getStock = (v, product, cart) => {
  if (!v) {
    return "Lagerstatus ukjent";
  }

  const cartItem = cart.find(
    (item) => item.cartId === product.id.toString() + v.id.toString()
  );

  return cartItem
    ? cartItem.variants.stock > 0
      ? cartItem.variants.stock
      : "Utsolgt"
    : v
    ? v.stock > 0
      ? v.stock
      : "Utsolgt"
    : "Lagerstatus ukjent";
};

export default getStock;
