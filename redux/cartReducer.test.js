import deepFreeze from "deep-freeze";
import {
  addToCart,
  cartReducer,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "./cart.slice";

describe("addToCart", () => {
  test("checks that quantity is 1 when item is added to cart addToCart", () => {
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
        stock: 3,
      },
    };

    deepFreeze(state);
    const newState = cartReducer(state, addToCart(product));

    expect(newState[0].quantity).toBe(1);
  });

  test("returns seperate object for different variant", () => {
    const state = [
      {
        id: "23",
        name: "Normal Tee",
        description:
          "The Normal Tee is an organic cotton short sleeve t-shirt. The t-shirt comes with a round, ribbed neckline and has seasonal graphics on the back.",
        price: 400,
        categoryId: [0],
        variants: {
          id: 3,
          name: "Black",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/normal_tee_black.jpeg",
          stock: 0,
        },
      },
    ];
    const product = {
      id: "24",
      name: "Normal Tee",
      description:
        "The Normal Tee is an organic cotton short sleeve t-shirt. The t-shirt comes with a round, ribbed neckline and has seasonal graphics on the back.",
      price: 400,
      categoryId: [0],
      variants: {
        id: 4,
        name: "White",
        image:
          "https://frend-ecom-api.azurewebsites.net/imgs/normal_tee_white.jpeg",
        stock: 1,
      },
    };

    deepFreeze(state);
    const newState = cartReducer(state, addToCart(product));

    expect(newState).toHaveLength(2);
    expect(newState[0].id).not.toBe(newState[1].id);
  });
  test("increments correct object", () => {
    const state = [
      {
        id: "23",
        name: "Normal Tee",
        description:
          "The Normal Tee is an organic cotton short sleeve t-shirt. The t-shirt comes with a round, ribbed neckline and has seasonal graphics on the back.",
        price: 400,
        categoryId: [0],
        variants: {
          id: 3,
          name: "Black",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/normal_tee_black.jpeg",
          stock: 0,
        },
        quantity: 1,
      },
      {
        id: "24",
        name: "Normal Tee",
        description:
          "The Normal Tee is an organic cotton short sleeve t-shirt. The t-shirt comes with a round, ribbed neckline and has seasonal graphics on the back.",
        price: 400,
        categoryId: [0],
        variants: {
          id: 4,
          name: "White",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/normal_tee_white.jpeg",
          stock: 1,
        },
        quantity: 1,
      },
    ];
    const product = {
      id: "24",
      name: "Normal Tee",
      description:
        "The Normal Tee is an organic cotton short sleeve t-shirt. The t-shirt comes with a round, ribbed neckline and has seasonal graphics on the back.",
      price: 400,
      categoryId: [0],
      variants: {
        id: 4,
        name: "White",
        image:
          "https://frend-ecom-api.azurewebsites.net/imgs/normal_tee_white.jpeg",
        stock: 1,
      },
    };

    deepFreeze(state);
    const newState = cartReducer(state, addToCart(product));
    expect(newState.find((p) => p.id === product.id).quantity).toBe(2);
  });
});

describe("decrement", () => {
  test("correct object when more than one", () => {
    const state = [
      {
        id: "23",
        name: "Normal Tee",
        description:
          "The Normal Tee is an organic cotton short sleeve t-shirt. The t-shirt comes with a round, ribbed neckline and has seasonal graphics on the back.",
        price: 400,
        categoryId: [0],
        variants: {
          id: 3,
          name: "Black",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/normal_tee_black.jpeg",
          stock: 0,
        },
        quantity: 1,
      },
      {
        id: "24",
        name: "Normal Tee",
        description:
          "The Normal Tee is an organic cotton short sleeve t-shirt. The t-shirt comes with a round, ribbed neckline and has seasonal graphics on the back.",
        price: 400,
        categoryId: [0],
        variants: {
          id: 4,
          name: "White",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/normal_tee_white.jpeg",
          stock: 1,
        },
        quantity: 2,
      },
    ];
    const product = {
      id: "24",
      name: "Normal Tee",
      description:
        "The Normal Tee is an organic cotton short sleeve t-shirt. The t-shirt comes with a round, ribbed neckline and has seasonal graphics on the back.",
      price: 400,
      categoryId: [0],
      variants: {
        id: 4,
        name: "White",
        image:
          "https://frend-ecom-api.azurewebsites.net/imgs/normal_tee_white.jpeg",
        stock: 1,
      },
    };

    deepFreeze(state);
    const newState = cartReducer(state, decrementQuantity(product.id));
    console.log(newState);
    expect(newState.find((p) => p.id === product.id).quantity).toBe(1);
  });
  test("removes object when quantity is 1", () => {
    const state = [
      {
        id: "23",
        name: "Normal Tee",
        description:
          "The Normal Tee is an organic cotton short sleeve t-shirt. The t-shirt comes with a round, ribbed neckline and has seasonal graphics on the back.",
        price: 400,
        categoryId: [0],
        variants: {
          id: 3,
          name: "Black",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/normal_tee_black.jpeg",
          stock: 0,
        },
        quantity: 1,
      },
      {
        id: "24",
        name: "Normal Tee",
        description:
          "The Normal Tee is an organic cotton short sleeve t-shirt. The t-shirt comes with a round, ribbed neckline and has seasonal graphics on the back.",
        price: 400,
        categoryId: [0],
        variants: {
          id: 4,
          name: "White",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/normal_tee_white.jpeg",
          stock: 1,
        },
        quantity: 1,
      },
    ];
    const product = {
      id: "24",
      name: "Normal Tee",
      description:
        "The Normal Tee is an organic cotton short sleeve t-shirt. The t-shirt comes with a round, ribbed neckline and has seasonal graphics on the back.",
      price: 400,
      categoryId: [0],
      variants: {
        id: 4,
        name: "White",
        image:
          "https://frend-ecom-api.azurewebsites.net/imgs/normal_tee_white.jpeg",
        stock: 1,
      },
    };

    deepFreeze(state);
    const newState = cartReducer(state, decrementQuantity(product.id));
    console.log(newState);
    expect(newState.find((p) => p.id === product.id)).toBeUndefined();
  });
});
