export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Cargo Trouser",
      description:
        "The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.",
      price: 1200,
      categoryId: [4],
      variants: [
        {
          id: 1,
          name: "Black",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_black.jpeg",
          stock: 3,
        },
        {
          id: 2,
          name: "Sand",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_sand.jpeg",
          stock: 2,
        },
      ],
    },
    {
      id: 2,
      name: "Normal Tee",
      description:
        "The Normal Tee is an organic cotton short sleeve t-shirt. The t-shirt comes with a round, ribbed neckline and has seasonal graphics on the back.",
      price: 400,
      categoryId: [0],
      variants: [
        {
          id: 3,
          name: "Black",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/normal_tee_black.jpeg",
          stock: 0,
        },
        {
          id: 4,
          name: "White",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/normal_tee_white.jpeg",
          stock: 1,
        },
      ],
    },
    {
      id: 3,
      name: "Striped Tee",
      description:
        "The Striped Tee comes in a relaxed and genderless fit and features a hanger patch on the chest and has a folded rib neckline.",
      price: 550,
      categoryId: [0],
      variants: [
        {
          id: 5,
          name: "Red",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/striped_tee_red.jpeg",
          stock: 8,
        },
        {
          id: 6,
          name: "Yellow",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/striped_tee_yellow.jpeg",
          stock: 5,
        },
        {
          id: 7,
          name: "Aqua",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/striped_tee_aqua.jpeg",
          stock: 0,
        },
      ],
    },
    {
      id: 4,
      name: "Oslo Crew",
      description:
        "This knitted sweater comes with ribbed hemlines and a white patch at the left front corner.",
      price: 1150,
      categoryId: [1, 3],
      variants: [
        {
          id: 8,
          name: "Gray",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/oslo_crew_gray.jpeg",
          stock: 20,
        },
      ],
    },
    {
      id: 5,
      name: "Normal Hoodie",
      description: "The Normal Hoodie comes in a relaxed and genderless fit.",
      price: 1000,
      categoryId: [1],
      variants: [
        {
          id: 9,
          name: "Blue",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/normal_hoodie_blue.jpeg",
          stock: 4,
        },
        {
          id: 10,
          name: "Gray",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/normal_hoodie_gray.jpeg",
          stock: 0,
        },
      ],
    },
    {
      id: 6,
      name: "Vest",
      description:
        "The Vest is made from sustainably sourced fabrics and has pockets at the side seams and a visible metal zipper at the front. ",
      price: 1500,
      categoryId: [2],
      variants: [
        {
          id: 11,
          name: "Medium Blue",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/vest_mid_blue.jpeg",
          stock: 11,
        },
        {
          id: 12,
          name: "White",
          image: "https://frend-ecom-api.azurewebsites.net/imgs/white.jpeg",
          stock: 3,
        },
      ],
    },
    {
      id: 7,
      name: "Zip Cardigan",
      description:
        "The Zip Cardigan is a sand-coloured cardigan, made from an alpaca blend. It is designed with a relaxed fit and comes with a zip closure.",
      price: 900,
      categoryId: [3],
      variants: [
        {
          id: 13,
          name: "Sand",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/zip_cardigan_sand.jpeg",
          stock: 4,
        },
      ],
    },
    {
      id: 8,
      name: "Shirt Jacket",
      description:
        "The shirt has standard collars, with one visible snap button at the top. The front contains hidden snap buttoning as well as square patch pockets with a loose lip detail. ",
      price: 1550,
      categoryId: [2],
      variants: [
        {
          id: 14,
          name: "Black",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/shirt_jacket_black.jpeg",
          stock: 13,
        },
      ],
    },
    {
      id: 9,
      name: "Polo Knit",
      description:
        "The Polo Knit is a sand-coloured polo sweater, knitted from boiled merino wool. The sweater contains snap buttoning towards the collar.",
      price: 800,
      categoryId: [3],
      variants: [
        {
          id: 15,
          name: "Black",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/polo_knit_black.jpeg",
          stock: 0,
        },
        {
          id: 16,
          name: "Sand",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/polo_knit_sand.jpeg",
          stock: 0,
        },
      ],
    },
    {
      id: 10,
      name: "Oslo Tee",
      description:
        "The Oslo Tee is a t-shirt that is made from 100% organic cotton.",
      price: 400,
      categoryId: [0],
      variants: [
        {
          id: 17,
          name: "Army",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/oslo_tee_army.jpeg",
          stock: 4,
        },
        {
          id: 18,
          name: "Navy",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/oslo_tee_navy.jpeg",
          stock: 2,
        },
        {
          id: 19,
          name: "White",
          image:
            "https://frend-ecom-api.azurewebsites.net/imgs/oslo_tee_white.jpeg",
          stock: 17,
        },
      ],
    },
  ];
  const {
    query: { id },
  } = req;

  console.log(id);

  const product = products.find((p) => p.id === parseInt(id));
  console.log(product);

  res.status(200).json(product);
}
