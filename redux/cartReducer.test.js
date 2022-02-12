import deepFreeze from "deep-freeze";
import {
  addToCart,
  cartReducer,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "./cart.slice";

describe("addToCart", () => {
  test("checks that quantity is 1 when new item is added to cart addToCart", () => {
    const state = [];
    const product = {
      id: 1,
      name: "Cargo Trouser",
      description:
        "The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.",
      price: 1200,
      categoryId: [4],
      variants: {
        id: 1,
        name: "Black",
        image:
          "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_black.jpeg",
        stock: 1,
      },
      cartId: "11",
      quantity: 2,
    };

    deepFreeze(state);
    const newState = cartReducer(state, addToCart(product));

    expect(newState[0].quantity).toBe(1);
  });

  test("returns seperate object for different variant", () => {
    const state = [
      {
        id: 1,
        name: "Cargo Trouser",
        description:
          "The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.",
        price: 1200,
        categoryId: [4],
        variants: {
          id: 1,
          name: "Black",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_black.jpeg",
          stock: 1,
        },
        cartId: "11",
        quantity: 2,
      },
    ];
    const product = {
      id: 1,
      name: "Cargo Trouser",
      description:
        "The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.",
      price: 1200,
      categoryId: [4],
      variants: {
        id: 2,
        name: "Sand",
        image:
          "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_sand.jpeg",
        stock: 1,
      },
      cartId: "12",
      quantity: 1,
    };

    deepFreeze(state);
    const newState = cartReducer(state, addToCart(product));

    expect(newState).toHaveLength(2);
    expect(newState[0].cartId).not.toBe(newState[1].cartId);
  });
  test("increments correct object", () => {
    const state = [
      {
        id: 1,
        name: "Cargo Trouser",
        description:
          "The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.",
        price: 1200,
        categoryId: [4],
        variants: {
          id: 1,
          name: "Black",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_black.jpeg",
          stock: 1,
        },
        cartId: "11",
        quantity: 1,
      },
      {
        id: 1,
        name: "Cargo Trouser",
        description:
          "The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.",
        price: 1200,
        categoryId: [4],
        variants: {
          id: 2,
          name: "Sand",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_sand.jpeg",
          stock: 1,
        },
        cartId: "12",
        quantity: 1,
      },
    ];
    const product = {
      id: 1,
      name: "Cargo Trouser",
      description:
        "The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.",
      price: 1200,
      categoryId: [4],
      variants: {
        id: 1,
        name: "Black",
        image:
          "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_black.jpeg",
        stock: 1,
      },
      cartId: "11",
      quantity: 2,
    };

    deepFreeze(state);
    const newState = cartReducer(state, addToCart(product));
    expect(newState.find((p) => p.cartId === product.cartId).quantity).toBe(2);
  });
});

describe("decrement", () => {
  test("correct object when more than one", () => {
    const state = [
      {
        id: 1,
        name: "Cargo Trouser",
        description:
          "The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.",
        price: 1200,
        categoryId: [4],
        variants: {
          id: 1,
          name: "Black",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_black.jpeg",
          stock: 1,
        },
        cartId: "11",
        quantity: 2,
      },
      {
        id: 1,
        name: "Cargo Trouser",
        description:
          "The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.",
        price: 1200,
        categoryId: [4],
        variants: {
          id: 2,
          name: "Sand",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_sand.jpeg",
          stock: 1,
        },
        cartId: "12",
        quantity: 1,
      },
    ];
    const product = {
      id: 1,
      name: "Cargo Trouser",
      description:
        "The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.",
      price: 1200,
      categoryId: [4],
      variants: {
        id: 1,
        name: "Black",
        image:
          "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_black.jpeg",
        stock: 1,
      },
      cartId: "11",
      quantity: 2,
    };

    deepFreeze(state);
    const newState = cartReducer(state, decrementQuantity(product.cartId));

    expect(newState.find((p) => p.cartId === product.cartId).quantity).toBe(1);
  });
  test("removes object when quantity is 1", () => {
    const state = [
      {
        id: 1,
        name: "Cargo Trouser",
        description:
          "The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.",
        price: 1200,
        categoryId: [4],
        variants: {
          id: 1,
          name: "Black",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_black.jpeg",
          stock: 1,
        },
        cartId: "11",
        quantity: 2,
      },
      {
        id: 1,
        name: "Cargo Trouser",
        description:
          "The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.",
        price: 1200,
        categoryId: [4],
        variants: {
          id: 2,
          name: "Sand",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_sand.jpeg",
          stock: 1,
        },
        cartId: "12",
        quantity: 1,
      },
    ];
    const product = {
      id: 1,
      name: "Cargo Trouser",
      description:
        "The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.",
      price: 1200,
      categoryId: [4],
      variants: {
        id: 2,
        name: "Sand",
        image:
          "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_sand.jpeg",
        stock: 1,
      },
      cartId: "12",
      quantity: 1,
    };

    deepFreeze(state);
    const newState = cartReducer(state, decrementQuantity(product.cartId));

    expect(newState.find((p) => p.cartId === product.cartId)).toBeUndefined();
  });
});
