export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      name: "T-shirts",
    },
    {
      id: 1,
      name: "Hoodies",
    },
    {
      id: 2,
      name: "Outwear",
    },
    {
      id: 3,
      name: "Knitwear",
    },
    {
      id: 4,
      name: "Trousers",
    },
  ]);
}
