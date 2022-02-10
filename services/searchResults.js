import Fuse from "fuse.js";

export const searchResults = (data, search) => {
  const fuse = new Fuse(data, {
    keys: ["name", "id", "description"],
    includeScore: true,
    threshold: 0.3,
  });

  const results = fuse.search(search);

  const searchResult = search ? results.map((product) => product.item) : data;

  return searchResult;
};
